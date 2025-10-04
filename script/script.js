import { notes, getAllNotes } from "./notes.js";

const title = document.getElementById("title");
const content = document.getElementById("content");
const formNote = document.getElementById("form");

formNote.addEventListener("click", (e) =>
  notes(e, title.value.trim(), content.value)
);

document.addEventListener("DOMContentLoaded", getAllNotes);

// setInterval(getAllNotes, 4000);
