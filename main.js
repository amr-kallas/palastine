let theme = document.querySelector(".theme");
let imgElement = document.querySelector(".heading .image .second-img");
let layout=document.querySelector(".layout")
let button1 = document. querySelector("#leader1");
let button2 = document.querySelector("#leader2");
let button3 = document.querySelector("#leader3");
let imgs = document.querySelector("#leaderImage");
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

button1.addEventListener("click", (e) =>{
  imgs.src = "img/amr.jpg";
});
button2.addEventListener("click", (e) =>{
  imgs.src = "img/amr2.jpg";
});
button3.addEventListener("click", (e) =>{
  imgs.src = "img/amr3.jpg";
});