// function init() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".container"),
//     smooth: true
//   });

//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy(".container", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
// }
// init();


// document.addEventListener('DOMContentLoaded', function () {

//   function ScrollUpdateDelay() {
//     setTimeout(function () { scroll.update(); }, 500);
//   }
//   ScrollUpdateDelay();
// });

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
  wheelMultiplier: 3,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const toTop = document.querySelector('.back-to-top');

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})



const tl = gsap.timeline(
);

function createTimeLoader() {
  let randomValue = 0
  setInterval(function () {
    randomValue = randomValue + Math.floor(Math.random() * 20);
    if (randomValue < 100) {
      document.querySelector('#loader h1').innerText = randomValue + '%';
    }
    else {
      randomValue = 100;
      document.querySelector('#loader h1').innerText = randomValue + '%';
    }
  }, 100);
}

tl.to("#loader h1", {
  scale: 1.5,
  delay: 0.5,
  duration: 1,
  onStart: createTimeLoader()
})

tl.to("#loader", {
  top: "-100vh",
  delay: 0.3,
  duration: 1
})

tl.from(".header .info, .header a", {
  duration: 1,
  opacity: 0,
  y: -100,
  stagger: 0.3
})


tl.from('.item', {
  duration: 1,
  stagger: 0.3,
  opacity: 0,
  y: 100,
  // scrollTrigger: {
  //   trigger: ' .project-items',
  //   start: 'top bottom',
  //   end: 'bottom bottom',
  //   scrub: 1
  // }
})