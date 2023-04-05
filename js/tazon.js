let isDragging = false;

document.addEventListener("mousedown", startDrag);
document.addEventListener("touchstart", startDrag);

document.addEventListener("mouseup", endDrag);
document.addEventListener("touchend", endDrag);

function startDrag() {
  isDragging = true;
  document.addEventListener("mousemove", rotar);
  document.addEventListener("touchmove", rotar);
}

function endDrag() {
  isDragging = false;
  document.removeEventListener("mousemove", rotar);
  document.removeEventListener("touchmove", rotar);
}

function rotar(event) {
  event.preventDefault();
  if (isDragging) {
    const x = (event.pageX || event.touches[0].pageX) / 10;
    document.getElementById("tazon").style.transform = `rotateY(${x}deg)`;
  }
}