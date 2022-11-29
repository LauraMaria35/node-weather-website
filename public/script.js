var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);
let music1 = new Audio('Cucubau.wav');

function toggleDoor() {
  element.classList.toggle("doorOpen");
  music1.play();
  music1.loop = true;
}
