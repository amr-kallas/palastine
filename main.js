let theme = document.querySelector(".theme");
let imgElement = document.querySelector(".heading .image .second-img");
let layout=document.querySelector(".layout")

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
