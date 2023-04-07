let isDragging = false;
let initialX = 0;
let rotation = 0;

document.addEventListener("mousedown", startDrag);
document.addEventListener("touchstart", startDrag);

document.addEventListener("mouseup", endDrag);
document.addEventListener("touchend", endDrag);

function startDrag(event) {
  const tazon = document.getElementById("tazon");
  if (!tazon.contains(event.target)) {
    return;
  }
  event.preventDefault();
  isDragging = true;
  initialX = event.pageX || event.touches[0].pageX;
  document.addEventListener("mousemove", rotar);
  document.addEventListener("touchmove", rotar);
}

function endDrag() {
  isDragging = false;
  initialX = 0;
  document.removeEventListener("mousemove", rotar);
  document.removeEventListener("touchmove", rotar);
}

function rotar(event) {
  event.preventDefault();
  if (isDragging) {
    const currentX = event.pageX || event.touches[0].pageX;
    let diffX = currentX - initialX;

    rotation += diffX/15;
    document.getElementById("tazon").style.transform = `rotateY(${rotation}deg)`;
  }
}
