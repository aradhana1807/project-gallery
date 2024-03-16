const scroll = new LocomotiveScroll({
  el: document.querySelector('.container'),
  smooth: true
});

document.addEventListener('DOMContentLoaded', function () {

  function ScrollUpdateDelay() {
    setTimeout(function () { scroll.update(); }, 500);
  }
  ScrollUpdateDelay();
});

const toTop = document.querySelector('.back-to-top');

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


// const gridItems = document.querySelectorAll('.item');

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry, index) => {
//     if (entry.isIntersecting) {
//       setTimeout(() => {
//         entry.target.classList.add('fadeIn');
//       }, index * 200);
//       observer.unobserve(entry.target);
//     }
//   });
// });

// gridItems.forEach(item => {
//   observer.observe(item);
// });


const tl = gsap.timeline();

tl.from('.item',
  {
    duration: 1,
    stagger: 0.3,
    opacity: 0,
    y: 100
  })