var offCanvas = document.querySelector(".offcanvas")
var elCanvas = document.querySelector(".shadow")
function menu(){
    offCanvas.classList.add("offcanvas__open")
    elCanvas.style.display = "block"
}
function closeOff(){
    offCanvas.classList.remove("offcanvas__open")
    elCanvas.style.display = "none"
}