let theme = document.querySelector(".theme");
let imgElement = document.querySelector(".heading .image .second-img");
let layout=document.querySelector(".layout")
let button1 = document. querySelector("#leader1");
let button2 = document.querySelector("#leader2");
let button3 = document.querySelector("#leader3");
let imgs = document.querySelector("#leaderImage");
const btn = document.querySelector(".scroll-up-btn");

btn.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
})
theme.addEventListener("click", (e) => {
  let element = document.body;
  element.classList.toggle("light");

  if (element.classList.contains("light")) {
    imgElement.style.opacity = 1;
    layout.style.background='none';
  } else {
    imgElement.style.opacity = 0;
    layout.style.background= 'rgb(0 0 0/60%)';

  }
});
theme.addEventListener('click', function() {
  const sunIcon = this.children[0];
  const moonIcon = this.children[1];

  if (sunIcon.style.display !== 'none') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline-block';
  } else {
    sunIcon.style.display = 'inline-block';
    moonIcon.style.display = 'none';
  }
});
button1.addEventListener("click", (e) =>{
  imgs.src = "img/YasserArafat.jpeg";
});
button2.addEventListener("click", (e) =>{
  imgs.src = "img/RawhiFattouh.jpg";
});
button3.addEventListener("click", (e) =>{
  imgs.src = "img/MahmoudAbbas.jpg";
});