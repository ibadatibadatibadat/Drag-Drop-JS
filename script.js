let lists = document.getElementsByClassName("list");
let right_box = document.getElementById("right");
let left_box = document.getElementById("left");

for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;
    right_box.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    right_box.addEventListener("drop", (e) => {
      right_box.appendChild(selected);
      selected = null;
    });

    left_box.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    left_box.addEventListener("drop", (e) => {
      left_box.appendChild(selected);
      selected = null;
    });
  });
}
