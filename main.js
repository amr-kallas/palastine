let theme = document.querySelector(".theme");
let imgElement = document.querySelector(".heading .image .second-img");
let layout=document.querySelector(".layout")
let button1 = document.querySelector("#A");
let button2 = document.querySelector("#B");
let button3 = document.querySelector("#C");
console.log(layout)
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

button2.addEventListener("click", (e) =>{
  let imgs = document.getElementsByClassName("active");
  imgs.classList.toggle("active"); 
  let img = document.querySelector("#B-image");
  img.classList.add("active");
})