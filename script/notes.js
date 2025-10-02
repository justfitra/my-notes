import postNote from "./postNote.js";

const notes = (e, title, content) => {
  e.preventDefault();
  if (!title) {
    console.log("title must be required");
  }

  if (!content) {
    console.log("content must be required");
  }

  if (title && content) {
    postNote(e, title, content);
    form.reset();
  }
};

export default notes;
