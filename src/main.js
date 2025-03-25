import gsap, { Expo } from "gsap";

let tl = gsap.timeline();

tl
    .to("#fs", {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut
    }).to("#elem", {
        height: "100%",
        duration: 2,
        delay: -2,
        ease: Expo.easeInOut
    }).to("#white", {
        height: "100%",
        duration: 2,
        delay: -1.65,
        ease: Expo.easeInOut
    })