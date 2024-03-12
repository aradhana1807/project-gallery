const toTop = document.querySelector('.back-to-top');

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})



const gridItems = document.querySelectorAll('.item');


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('fadeIn');
      }, index * 200);
      observer.unobserve(entry.target);
    }
  });
});

gridItems.forEach(item => {
  observer.observe(item);
});