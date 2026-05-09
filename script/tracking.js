const sec = document.querySelectorAll("main > section");
const navL = document.querySelectorAll("nav ul li a");
const timeIt = document.querySelectorAll(".timleine-item");

window.addEventListener("scroll", () => {
  let current = "";
  sec.forEach((sec) => {
    const secTop = sec.offsetTop - 80;
    if (pageYOffset >= secTop) {
      current = sec.getAttribute("id");
    }
  });
  navL.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

timeIt.forEach((item, index) => {
  item.style.transitionDelay = index * 0.15 + "s";
  observer.observe(item);
});

const navBtn=document.querySelector("nav button");
navL.forEach((link)=>{
  link.addEventListener("click",()=>{
    document.getElementById("nav-menu").classList.remove("open");
    navBtn.classList.remove("open");
  });
});