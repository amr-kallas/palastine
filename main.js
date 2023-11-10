let theme = document.querySelector(".theme");
let imgElement = document.querySelector(".heading .image .second-img");

theme.addEventListener("click", (e) => {
  let element = document.body;
  element.classList.toggle("light");

  if (element.classList.contains("light")) {
    imgElement.style.opacity = 1;
  } else {
    imgElement.style.opacity = 0;

  }
});
