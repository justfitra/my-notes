import deletNote from "../api/deleteNote.js";
import getNote from "../api/getNote.js";
import postNote from "../api/postNote.js";
import searchNote from "../api/searchNote.js";
import updateNote from "../api/updateNote.js";

const listNotes = document.getElementById("list");
const showModal = document.getElementById("show-modal");
const showTitle = document.getElementById("show-title");
const showContent = document.getElementById("show-content");
const showTime = document.getElementById("show-time");
const modal = document.getElementById("modal");
const editModal = document.getElementById("editModal");

export const notes = (e, title, content) => {
  e.preventDefault();
  if (!title) {
    console.log("title must be required");
  }

  if (!content) {
    console.log("content must be required");
  }

  if (title && content) {
    postNote(title, content);
    modal.style.display = "none";
    form.reset();
  }
};

export async function searchNoteTitle(title) {
  try {
    const notes = await searchNote(title);

    notes.map((res) => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const editNoteButton = document.createElement("button");
      const detailNoteButton = document.createElement("button");
      const deleteNoteButton = document.createElement("button");
      editNoteButton.innerHTML = `<i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-pen" ></i>`;
      deleteNoteButton.innerHTML = `<i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-trash"></i>`;
      detailNoteButton.innerHTML = `<i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-eye"></i>`;
      div.innerHTML = `
          <div class="border p-4 rounded-lg gap-4  hover:shadow-lg shadow-primary duration-200 ease-in-out transition-all">
              <h3 class="font-semibold text-2xl text-light overflow-hidden">${res.title}</h3>
              <p class="text-light/40 text-xs my-2">${res.date}</p>
              <p class="text-light text-sm  overflow-hidden line-clamp-3">
                  ${res.content}
              </p>
              <div class="flex items-center gap-2 mt-4">
                  
              </div>
          </div>
      `;
      li.appendChild(div);
      div.querySelector(".flex").appendChild(deleteNoteButton);
      div.querySelector(".flex").prepend(editNoteButton);
      div.querySelector(".flex").prepend(detailNoteButton);

      editNoteButton.addEventListener("click", function () {
        editModal.style.display = "block";
        editTitle.value = res.title;
        editContent.value = res.content;
        formEdit.addEventListener("submit", function (e) {
          e.preventDefault();
          console.log(editTitle.value);
          editModal.style.display = "none";
          updateNote(res.id - 1, editTitle.value, editContent.value);
        });
      });

      detailNoteButton.addEventListener("click", function () {
        showModal.style.display = "block";
        showTitle.textContent = res.title;
        showTime.textContent = res.date;
        showContent.textContent = res.content;
      });

      deleteNoteButton.addEventListener("click", function () {
        deletNote(res.id);
      });

      listNotes.prepend(li);
    });
  } catch (err) {
    console.log(err.meesage);
  }
}

export async function getAllNotes() {
  try {
    const notes = await getNote();

    notes.map((res) => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const editNoteButton = document.createElement("button");
      const detailNoteButton = document.createElement("button");
      const deleteNoteButton = document.createElement("button");
      editNoteButton.innerHTML = `<i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-pen" ></i>`;
      deleteNoteButton.innerHTML = `<i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-trash"></i>`;
      detailNoteButton.innerHTML = `<i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-eye"></i>`;
      div.innerHTML = `
          <div class="border p-4 rounded-lg gap-4  hover:shadow-lg shadow-primary duration-200 ease-in-out transition-all">
              <h3 class="font-semibold text-2xl text-light overflow-hidden">${res.title}</h3>
              <p class="text-light/40 text-xs my-2">${res.date}</p>
              <p class="text-light text-sm  overflow-hidden line-clamp-3">
                  ${res.content}
              </p>
              <div class="flex items-center gap-2 mt-4">
                  
              </div>
          </div>
      `;
      li.appendChild(div);
      div.querySelector(".flex").appendChild(deleteNoteButton);
      div.querySelector(".flex").prepend(editNoteButton);
      div.querySelector(".flex").prepend(detailNoteButton);

      editNoteButton.addEventListener("click", function () {
        editModal.style.display = "block";
        editTitle.value = res.title;
        editContent.value = res.content;
        formEdit.addEventListener("submit", function (e) {
          e.preventDefault();
          console.log(editTitle.value);
          editModal.style.display = "none";
          updateNote(res.id - 1, editTitle.value, editContent.value);
        });
      });

      detailNoteButton.addEventListener("click", function () {
        showModal.style.display = "block";
        showTitle.textContent = res.title;
        showTime.textContent = res.date;
        showContent.textContent = res.content;
      });

      deleteNoteButton.addEventListener("click", function () {
        deletNote(res.id);
      });

      listNotes.prepend(li);
    });
  } catch (err) {
    console.log(err.meesage);
  }
}
