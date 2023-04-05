let isDragging = false;

document.addEventListener("mousedown", startDrag);
document.addEventListener("mouseup", endDrag);

function startDrag() {
  isDragging = true;
  document.addEventListener("mousemove", rotar);
}

function endDrag() {
  isDragging = false;
  document.removeEventListener("mousemove", rotar);
}

function rotar(event) {
  if (isDragging) {
    const x = event.pageX / 10;
    document.getElementById("tazon").style.transform = `rotateY(${x}deg)`;
  }
}