import notes from "./notes.js";

const title = document.getElementById("title");
const content = document.getElementById("content");
const formNote = document.getElementById("form");

formNote.addEventListener("click", (e) =>
  notes(e, title.value.trim(), content.value.trim())
);
