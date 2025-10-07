import { notes, getAllNotes } from "./notes.js";

const title = document.getElementById("title");
const content = document.getElementById("content");
const formNote = document.getElementById("form");
const search = document.getElementById("search");
const searchForm = document.getElementById("searchForm");
formNote.addEventListener("click", (e) =>
  notes(e, title.value.trim(), content.value)
);

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(search.value);
  if (search.value.trim() !== "") {
    getAllNotes(search.value.trim());
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (search.value) {
    console.log("ada");
  } else {
    getAllNotes();
  }
});
