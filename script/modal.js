const modal = document.getElementById("modal");
const showModal = document.getElementById("show-modal");
const editModal = document.getElementById("editModal");
const sidebar = document.getElementById("sidebar");
const openModal = document.getElementById("addNote");
const closeModal = document.getElementById("close");
const closeShowModal = document.getElementById("show-close");
const closeEditModal = document.getElementById("edit-close");

closeModal.onclick = function () {
  modal.style.display = "none";
};

closeShowModal.onclick = function () {
  showModal.style.display = "none";
};

closeEditModal.onclick = function () {
  editModal.style.display = "none";
};

openModal.addEventListener("click", function () {
  modal.style.display = "block";
});

window.onclick = function (event) {
  if (
    event.target == modal ||
    event.target == showModal ||
    event.target == editModal
  ) {
    modal.style.display = "none";
    editModal.style.display = "none";
    showModal.style.display = "none";
  }
};

console.log(editModal);
