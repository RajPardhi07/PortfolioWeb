
function revealToSpan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            // create two spans
            var parent = document.createElement("span");
            var child = document.createElement("span");

            //parent and child both sets their respective classes
            parent.classList.add("parent");
            child.classList.add("child");

            //span parent gets child and child gets elem details
            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            // elem replaces its value with parent span
            elem.innerHTML = "";
            elem.appendChild(parent);
        })
}

function valueSetters() {
    gsap.set("#nav a", { y: "-100%", opacity: 0 })
    gsap.set("#home span .child", { y: "100%" })
    gsap.set("#home .row img", { opacity: 0 })


    document.querySelectorAll("#Visual>g").forEach(function (e) {
        var character = e.childNodes[1].childNodes[1];

        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';

    })
}

function loaderAnimation() {
    var tl = gsap.timeline();
    tl.from("#loader .child span", {
        x: 100,
        stagger: .2,
        duration: 1.4,
        delay: 1,
        ease: Power3.easeInOut
    })
        .to("#loader .parent .child", {
            y: "-100%",
            duration: 1,

            ease: Circ.easeInOut
        })

        .to("#loader", {
            height: 0,
            duration: 1,
            ease: Circ.easeInOut
        })
        .to("#green", {
            height: "100%",
            top: 0,
            delay: -.7,
            duration: 1,
            ease: Circ.easeInOut
        })
        .to("#green", {
            height: "0%",
            delay: -.4,
            duration: 1,
            ease: Circ.easeInOut,
            onComplete: function () {
                animateHomepage();
            }

        })
}


function animateSvg() {


    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.easeInOut,
        // delay:5

    })
}
function animateHomepage() {

    var tl = gsap.timeline();

    tl.
        to("#nav a", {
            y: 0,
            opacity: 1,
            stagger: .05,
            ease: Expo.easeInOut
        })
        .to("#home .parent .child", {
            y: 0,
            stagger: .1,
            duration: 1.5,
            ease: Expo.easeInOut
        })
        .to("#home .row img", {
            opacity: 1,
            delay: -.5,
            ease: Expo.easeInOut,
            onComplete: function () {
                animateSvg();
            }
        })
}


function locoInitialize() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}




function cardHoverEffect() {
    document.querySelectorAll(".cnt")
        .forEach(function (cnt) {
            var showingImage;
            cnt.addEventListener("mousemove", function (dets) {
                document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
                showingImage = dets.target;
                document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
                showingImage.style.filter = "grayscale(1)";


                document.querySelector("#work").style.backgroundColor ="#" + dets.target.dataset.color;
            })
            cnt.addEventListener("mouseleave", function (dets) {
                document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
                showingImage.style.filter = "grayscale(0)"
                document.querySelector("#work").style.backgroundColor ="#fff";

            })
        })
}

function page3Hover() {
    document.querySelectorAll("#cnt3")
        .forEach(function (cnt3) {
            var showingImage;
            cnt3.addEventListener("mousemove", function (dets) {
                document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
                showingImage = dets.target;
                document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
                showingImage.style.filter = "grayscale(1)";


                document.querySelector("#page3").style.backgroundColor ="#" + dets.target.dataset.color;
            })
            cnt3.addEventListener("mouseleave", function (dets) {
                document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
                showingImage.style.filter = "grayscale(0)"
                document.querySelector("#page3").style.backgroundColor ="#fff";

            })
        })
}

function page3HoverC4() {
    document.querySelectorAll("#cnt4")
        .forEach(function (cnt4) {
            var showingImage;
            cnt4.addEventListener("mousemove", function (dets) {
                document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
                showingImage = dets.target;
                document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
                showingImage.style.filter = "grayscale(1)";


                document.querySelector("#page3").style.backgroundColor ="#" + dets.target.dataset.color;
            })
            cnt4.addEventListener("mouseleave", function (dets) {
                document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
                showingImage.style.filter = "grayscale(0)"
                document.querySelector("#page3").style.backgroundColor ="#fff";

            })
        })
}

function page3HoverC5() {
    document.querySelectorAll("#cnt5")
        .forEach(function (cnt5) {
            var showingImage;
            cnt5.addEventListener("mousemove", function (dets) {
                document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
                showingImage = dets.target;
                document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
                showingImage.style.filter = "grayscale(1)";


                document.querySelector("#page3").style.backgroundColor ="#" + dets.target.dataset.color;
            })
            cnt5.addEventListener("mouseleave", function (dets) {
                document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
                showingImage.style.filter = "grayscale(0)"
                document.querySelector("#page3").style.backgroundColor ="#fff";

            })
        })
}

    // gsap.from("#right-hand",{
    //     y:100,
    //     opacity:0,
    //     duration:1,
    //     stagger:0.25,
    //     scrollTrigger:{
    //         trigger:"#right-hand",
    //         scroller:"#main",
    //         start:"top 90%",
    //         end:"top 100%",
    //         scrub:3,
    //         markers:true,
    //     }
    // })






revealToSpan();
valueSetters();
loaderAnimation();
locoInitialize();
cardHoverEffect();
page3Hover();
page3HoverC4();
page3HoverC5();



// gsap.from("#page5 h1",{
//     y:100,
//     opacity:0,
//     duration:0.6,
//     rotata:5,
//     scrollTrigger:{
//         trigger:"#page5 h1",
//         scroller:"#main",
//         start:"top 90%",
//         end:"top 90%",
//         scrub:3,
//         markers:true
//     }
// })

// gsap.from("#page5 h1", {
//     // rotate: 5,
//     y: 100,
//     opacity: 0,
//     duration:1,
//     stagger: 0.25,
//     scrollTrigger: {
//       trigger: "#page5 h1",
//       scroller: "body",
//       markers: true,
//       start: "top 70%",
//       end: "top 69%",
//       scrub: 3
//     }
//   })