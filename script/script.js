import { notes, getAllNotes, searchNoteTitle } from "./notes.js";

const title = document.getElementById("title");
const content = document.getElementById("content");
const formNote = document.getElementById("form");
const search = document.getElementById("search");
const searchForm = document.getElementById("searchForm");
const listNotes = document.getElementById("list");

formNote.addEventListener("click", (e) =>
  notes(e, title.value.trim(), content.value)
);

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const q = search.value.trim();
  if (listNotes) listNotes.innerHTML = "";

  if (q !== "") {
    searchNoteTitle(q);
  } else {
    getAllNotes();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  getAllNotes();
});
