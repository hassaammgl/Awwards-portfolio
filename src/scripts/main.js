import gsap, { Circ, Power3, Expo } from "gsap";
// import { locoInit } from "./locomotive";


function revealToSpan() {
    const h1Elems = document.getElementsByClassName("reveal");

    for (let i = 0; i < h1Elems.length; i++) {
        const e = h1Elems[i];

        const orignalContent = e.innerHTML;
        console.log(orignalContent);

        e.innerHTML = "";

        const spanP = document.createElement("span");
        spanP.classList.add("parent")
        const spanC = document.createElement("span");
        spanC.classList.add("child")

        spanC.innerHTML = orignalContent;

        spanP.appendChild(spanC);
        e.appendChild(spanP);
    }

}

function valueSetters() {
    document.querySelectorAll("#Visual>g").forEach(function (e) {
        let charecter = e.childNodes[1].childNodes[1]
        console.log(charecter);

        charecter.style.strokeDasharray = charecter.getTotalLength() + "px";
        charecter.style.strokeDashoffset = charecter.getTotalLength() + "px";
    })

    gsap.set("#nav a", { y: "-100%", opacity: 0 })
    gsap.set("#home .parent .child", { y: "100%", opacity: 0 })
    gsap.set("#home .row img", { opacity: 0 })
}

function loaderAnimation() {
    var tl = gsap.timeline();
    tl
        .from('#loader .child span', {
            x: 100,
            delay: 1,
            stagger: .2,
            duration: 1.4,
            ease: Power3.easeInOut
        })
        .to('#loader .parent .child', {
            y: "-100%",
            duration: 1,
            ease: Circ.easeInOut
        })
        .to('#loader', {
            height: 0,
            duration: 1,
            ease: Circ.easeInOut
        })
        .to('#green', {
            height: "100%",
            top: 0,
            duration: 1,
            ease: Circ.easeInOut,
            delay: -1
        })
        .to('#green', {
            height: "0%",
            duration: 1,
            ease: Circ.easeInOut,
            delay: -.4,
            onComplete: () => {
                animateHomePage()
            }
        })

}

function animateSVG() {

    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 1.52,
        ease: Expo.easeInOut,
        delay: .5
    })
}

function animateHomePage() {

    const tl = gsap.timeline()

    tl
        .to("#nav a", {
            y: 0,
            opacity: 1,
            stagger: .05,
            ease: Expo.easeInOut
        })
        .to("#home span .child", {
            y: 0,
            opacity: 1,
            stagger: .1,
            duration: 1.52,
            ease: Expo.easeInOut
        })
        .to("#home .row img", {
            opacity: 1,
            ease: Expo.easeInOut,
            onComplete: () => animateSVG()
        })

}

revealToSpan()
valueSetters()
loaderAnimation()
// locoInit()