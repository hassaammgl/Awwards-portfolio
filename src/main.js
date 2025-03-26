import gsap, { Circ, Power3 } from "gsap";

const revealToSpan = () => {
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

    // gsap.to(".child", {
    //     duration: 1,
    //     transform: "translate(0, 0%)",
    //     ease: "expo.inOut",
    //     // stagger: .2
    // })

}
revealToSpan()

var tl = gsap.timeline();

tl
    .from('.child span', {
        x: 100,
        delay: 1,
        stagger: .2,
        duration: 1.4,
        ease: Power3.easeInOut
    })
    .to('.parent .child', {
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
        duration: -.8,
        ease: Circ.easeInOut
    })
    .to('#green', {
        height: "0%",
        duration: -.8,
        ease: Circ.easeInOut
    })
