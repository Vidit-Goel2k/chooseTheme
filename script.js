const grey = document.querySelector("#grey")
const main = document.getElementById("main");

grey.addEventListener("click", changColor)

function changColor(){
    console.log("clicked")
    main.style.backgroundColor="grey"
}