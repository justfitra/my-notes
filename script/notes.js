import postNote from "./postNote.js";
import getNote from "./getNote.js";

const listNotes = document.getElementById("list");
const showModal = document.getElementById("show-modal");
const showTitle = document.getElementById("show-title");
const showContent = document.getElementById("show-content");
const showTime = document.getElementById("show-time");

export const notes = (e, title, content) => {
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

export async function getAllNotes() {
  const notes = await getNote();
  notes.forEach((res) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const editNote = document.createElement("button");
    const detailNote = document.createElement("button");

    editNote.innerHTML = `<i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-pen" ></i>`;
    detailNote.innerHTML = `<i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-eye"></i>`;
    div.innerHTML = `
        <div class="border p-4 rounded-lg gap-4  hover:shadow-lg shadow-primary duration-200 ease-in-out transition-all">
            <h3 class="font-semibold text-2xl text-light overflow-hidden">${res.title}</h3>
            <p class="text-light/40 text-xs my-2">${res.date}</p>
            <p class="text-light text-sm  overflow-hidden line-clamp-3">
                ${res.content}
            </p>
            <div class="flex items-center gap-2 mt-4">
                <i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-trash"></i>
            </div>
        </div>
    `;
    li.appendChild(div);

    div.querySelector(".flex").prepend(editNote);
    div.querySelector(".flex").prepend(detailNote);
    editNote.addEventListener("click", function () {});

    detailNote.addEventListener("click", function () {
      showModal.style.display = "block";

      showTitle.textContent = res.title;
      showTime.textContent = res.date;
      showContent.textContent = res.content;
    });
    listNotes.appendChild(li);
  });
}
