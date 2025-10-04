const editModalTemplate = `

  <div
      id="editModal"
      class="z-50 bg-light/10 fixed hidden top-0 left-0 pt-[100px] w-full h-full overflow-auto"
    >
      <div
        id="modal-content"
        class="w-[50%] rounded-md text-light bg-dark m-auto border flex flex-col relative border-dark p-10"
      >
      <form class"flex flex-col " id="formEdit">
      <div class="mb-3 flex flex-col gap-1">
        <label for="editTitle" class="font-semibold mb-2">Title</label>
        <input
          type="text"
          placeholder="Enter Title"
          name="editTitle"
          class="w-full bg-transparent placeholder:text-slate-400 text-light text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-secondary hover:border-slate-300 shadow-sm focus:shadow"
          id="editTitle"
        />
      </div>
      <div class="mb-3 flex flex-col gap-1">
        <label for="editContet" class="font-semibold my-2">Content</label>
        <textarea
          name="editContent"
          class="w-full bg-transparent placeholder:text-slate-400 text-light text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-secondary hover:border-slate-300 shadow-sm focus:shadow"
          id="editContent"
          placeholder="Enter Content..."
          rows="6"
        ></textarea>
      </div>
        <button
        type="submit"
          class="w-20 mt-2 rounded-md bg-primary/10 hover:text-light hover:bg-primary transition-all ease-in-out duration-200 border-primary border cursor-pointer p-2 text-primary"
        >
          Submit
        </button>
        <i
          class="fa-solid fa-xmark text-light absolute top-3 right-3"
          id="close"
        ></i>
      </form>
      </div>
    </div>
    `;

class EditModal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = editModalTemplate;
  }
}

customElements.define("edit-modal-component", EditModal);
