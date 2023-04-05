document.addEventListener("mousedown",activarRotacion);
document.addEventListener("mouseup",desactivarRotacion);
function activarRotacion(event){
    document.addEventListener("mousemove",rotar)
}
function desactivarRotacion(event){
    document.removeEventListener("mousemove",rotar)
}
function rotar(event) {
    const x = -event.pageX / 10;
    document.getElementById("tazon").style.transform = `rotateY(${-x}deg)`;
}

