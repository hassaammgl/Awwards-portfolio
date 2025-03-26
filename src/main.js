import gsap from "gsap";

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

gsap.to(".child", {
    duration: 1,
    transform: "translate(0, 0%)",
    ease: "expo.inOut",
    stagger: .2
})