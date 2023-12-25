var button = document.querySelector("button");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  openModal();
  button.innerText = "You've got this!!!";
});

modalX.addEventListener("click", function () {
  closeModal();
  button.innerText = "Who's Got This?";
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeModal();
}
});

var closeModal = function () {
  if (modal.classList.contains("show-modal")) {
    modal.classList.remove("show-modal")
  }
};

var openModal = function () {
  if (modal.classList.add("show-modal")) {
    button.innerText = "You've got this!!!";
  }
}
