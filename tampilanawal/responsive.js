/* )
    Karol Efrido Sanggam Purba(10123380) 
    (*/

const header = document.querySelector("header");
const header_title = document.getElementById("header_title");
const d_btn1 = document.getElementById("d_btn1");
const d_btn2 = document.getElementById("d_btn2");
const slider_btn = document.querySelectorAll(".dot");

const backimg = {
  fimg: "../IMG/god-of-war-ragnarök.jpg",
  simg: "../IMG/Red-Dead-Redemption-2.jpg",
  timg: "../IMG/geometryDash.jpg",
  eimg: "../IMG/Vampyr.jpg",
};

const slider_load = (index) => {
  const images = [backimg.fimg, backimg.simg, backimg.timg, backimg.eimg];

  header.style.background = `url(${images[index]}) no-repeat center center/cover`;
  header_title.innerText = titles[index];

  slider_btn.forEach((btn, i) => {
    btn.style.background = i === index ? "#fff" : "rbg(184, 184, 184, 0.1)";
  });

  d_btn1.href = "#";
  d_btn2.href = "#";
};

let currentIndex = 0;

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slider_btn.length;
  slider_load(currentIndex);
};

slider_btn.forEach((btn, index) => {
  btn.addEventListener("CLICK", () => {
    currentIndex = index;
    slider_load(currentIndex);
  });
});

setInterval(nextSlide, 15000);
slider_load(currentIndex);
