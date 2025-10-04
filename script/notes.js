import getNote from "../api/getNote.js";
import postNote from "../api/postNote.js";
import updateNote from "../api/updateNote.js";

const listNotes = document.getElementById("list");
const showModal = document.getElementById("show-modal");
const showTitle = document.getElementById("show-title");
const showContent = document.getElementById("show-content");
const showTime = document.getElementById("show-time");
const modal = document.getElementById("modal");
const editModal = document.getElementById("editModal");

export const notes = (e, title, content) => {
  // e.preventDefault();
  if (!title) {
    console.log("title must be required");
  }

  if (!content) {
    console.log("content must be required");
  }

  if (title && content) {
    postNote(e, title, content);
    modal.style.display = "none";
    form.reset();
  }
};

const editNote = (e, id, title, content) => {};

export async function getAllNotes() {
  try {
    const notes = await getNote();
    console.log(notes.data);

    if (!notes.data) {
      throw new Error("Notes is Empty");
    }
    notes.data.map((res) => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const editNoteButton = document.createElement("button");
      const detailNote = document.createElement("button");

      editNoteButton.innerHTML = `<i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-pen" ></i>`;
      detailNote.innerHTML = `<i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-eye"></i>`;
      div.innerHTML = `
          <div class="border p-4 rounded-lg gap-4  hover:shadow-lg shadow-primary duration-200 ease-in-out transition-all">
              <h3 class="font-semibold text-2xl text-light overflow-hidden">${res.Title}</h3>
              <p class="text-light/40 text-xs my-2">${res.Date}</p>
              <p class="text-light text-sm  overflow-hidden line-clamp-3">
                  ${res.Content}
              </p>
              <div class="flex items-center gap-2 mt-4">
                  <i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-trash"></i>
              </div>
          </div>
      `;
      li.appendChild(div);

      div.querySelector(".flex").prepend(editNoteButton);
      div.querySelector(".flex").prepend(detailNote);

      editNoteButton.addEventListener("click", function () {
        editModal.style.display = "block";
        editTitle.value = res.Title;
        editContent.value = res.Content;
        formEdit.addEventListener("submit", function (e) {
          e.preventDefault();
          console.log(editTitle.value);

          updateNote(res.id, editTitle.value, editContent.value);
        });
      });

      detailNote.addEventListener("click", function () {
        showModal.style.display = "block";
        showTitle.textContent = res.Title;
        showTime.textContent = res.Date;
        showContent.textContent = res.Content;
      });
      listNotes.appendChild(li);
    });
  } catch (err) {
    console.log(err.meesage);
  }
}
