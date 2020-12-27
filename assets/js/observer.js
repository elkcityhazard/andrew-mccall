const posts = document.querySelectorAll(".post-snippet");
const images = document.querySelectorAll(".img-responsive");
let options = {
  root: document.querySelector(".main-content"),
  rootMargin: "0px",
  threshold: 1.0,
};

observer = new IntersectionObserver((entries, options) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__fadeIn");
      observer.unobserve(entry.target);
    } else {
      //entry.target.classList.remove('animate__animated animate__bounce');
      return;
    }
  });
});

posts.forEach((post) => {
  observer.observe(post);
});

observer2 = new IntersectionObserver((images) => {
  images.forEach((image) => {
    if (image.intersectionRatio > 0) {
      let attr = image.target.getAttribute("data-src");
      image.target.classList.add("animate__animated");
      image.target.classList.add("animate__fadeIn");
      image.target.src = attr;
      observer2.unobserve(image.target);
    }
  });
});

images.forEach((image) => {
  observer2.observe(image);
});
