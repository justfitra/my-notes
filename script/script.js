import getNote from "./getNote.js";
import notes from "./notes.js";

const title = document.getElementById("title");
const content = document.getElementById("content");
const formNote = document.getElementById("form");
const listNotes = document.getElementById("list");

async function getAllNotes() {
  const notes = await getNote();
  notes.forEach((res) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const editNote = document.createElement("button");

    editNote.innerHTML = `<i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-pen" ></i>`;

    div.innerHTML = `
        <div class="border p-4 rounded-lg gap-4  hover:shadow-lg shadow-primary duration-200 ease-in-out transition-all">
            <h3 class="font-semibold text-2xl text-light overflow-hidden">${res.title}</h3>
            <p class="text-light/40 text-xs my-2">${res.date}</p>
            <p class="text-light text-sm  overflow-hidden">
                ${res.content}
            </p>
            <div class="flex items-center gap-2 mt-4">
                <i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-eye"></i>
                <i class="fa-solid text-xs text-light/50 hover:text-light duration-200 transition-all ease-in-out cursor-pointer fa-trash"></i>
            </div>
        </div>
    `;
    li.appendChild(div);

    div.querySelector(".flex").prepend(editNote);
    editNote.addEventListener("click", function () {});
    listNotes.appendChild(li);
  });
}

formNote.addEventListener("click", (e) =>
  notes(e, title.value.trim(), content.value)
);

window.addEventListener("DOMContentLoaded", () => getAllNotes());
