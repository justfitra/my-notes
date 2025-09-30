const sidebarTemplate = `

    <div
      class="w-1/4 border-r text-light h-[500px] border-light/50 overflow-scroll fixed scroll-auto pb-[80px]"
    >
      <div class="px-[50px] py-5">
        <button
        type="button"
          id="addNote"
          class=" mb-4 w-full flex items-center gap-2 text-start text-xl px-4 py-2 rounded-sm hover:bg-primary/25 hover:pl-6 transition-all ease-in-out duration-200 cursor-pointer"
        >
          Add Notes
          <i class="fa-solid fa-plus text-sm"></i>
        </button>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Notes"
        />
      </div>
    </div>
    `;

class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = sidebarTemplate;
  }
}

customElements.define("sidebar-component", Sidebar);
