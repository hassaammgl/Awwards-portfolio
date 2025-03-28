import LocomotiveScroll from 'locomotive-scroll';
export function locoInit() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
    })

    scroll.on("scroll", (e) => {
        console.log(e);
    })
}
