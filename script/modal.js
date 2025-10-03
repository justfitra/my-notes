const modal = document.getElementById("modal");
const showModal = document.getElementById("show-modal");
const sidebar = document.getElementById("sidebar");
const openModal = document.getElementById("addNote");
const closeModal = document.getElementById("close");
const closeShowModal = document.getElementById("show-close");

closeModal.onclick = function () {
  modal.style.display = "none";
};

closeShowModal.onclick = function () {
  showModal.style.display = "none";
};

openModal.addEventListener("click", function () {
  modal.style.display = "block";
});

window.onclick = function (event) {
  if (event.target == modal || event.target == showModal) {
    modal.style.display = "none";
    showModal.style.display = "none";
  }
};

console.log(showModal);
