let dragged = null;

const start = document.querySelector(".start");
const end = document.querySelector(".end");
const tasks = document.querySelectorAll(".draggable-item");

tasks.forEach((task) =>
  task.addEventListener("dragstart", (e) => {
    dragged = e.target;
  })
);
end.addEventListener("dragover", (e) => {
  e.preventDefault();
});
end.addEventListener("drop", (e) => {
  e.target.appendChild(dragged);
  // if (e.target.className === "drag-box") {
  //   dragged.parentNode.removeChild(dragged);
  //   e.target.appendChild(dragged);
  // }
});
