let isDragging = false;

document.addEventListener("mousedown", startDrag);
document.addEventListener("mouseup", endDrag);
document.addEventListener("ontouchstart", startDrag);
document.addEventListener("ontouchend", endDrag);


function startDrag() {
  isDragging = true;
  document.addEventListener("mousemove", rotar);
  document.addEventListener("ontouchmove", rotar);
}

function endDrag() {
  isDragging = false;
  document.removeEventListener("mousemove", rotar);
  document.addEventListener("ontouchmove", rotar);
}

function rotar(event) {
  if (isDragging) {
    const x = event.pageX / 10;
    document.getElementById("tazon").style.transform = `rotateY(${x}deg)`;
  }
}