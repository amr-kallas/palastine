let theme=document.querySelector(".theme");

theme.addEventListener("click",(e) => {
    let element =document.body;
    element.classList.toggle('light');
})