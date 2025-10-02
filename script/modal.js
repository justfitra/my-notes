const modal = document.getElementById("modal");
const sidebar = document.getElementById("sidebar");
const openModal = document.getElementById("addNote");
const closeModal = document.getElementById("close");

closeModal.onclick = function () {
  modal.style.display = "none";
};

openModal.addEventListener("click", function () {
  modal.style.display = "block";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
