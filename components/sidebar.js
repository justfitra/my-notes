const sidebarTemplate = `

    <div
      class="w-1/4 border-r bg-dark text-light h-[500px] border-light/50 overflow-scroll z-20 top-0 h-screen fixed scroll-auto pb-[80px]"
    >
      <div class="px-[50px] pb-5 pt-[165px]">
        <button
        type="button"
          id="addNote"
          class=" mb-4 w-full flex items-center gap-2 text-start text-xl px-4 py-2 rounded-sm hover:bg-primary/25 hover:pl-6 transition-all ease-in-out duration-200 cursor-pointer"
        >
          Add Notes
          <i class="fa-solid fa-plus text-sm"></i>
        </button>
<form id="searchForm" class="relative w-[200px]">
<input
  type="search"
  name="search"
  id="search"
  class="border-light border-1 placeholder:bg-transparent rounded-full py-2 w-full px-4"
  placeholder="Search Notes"
/>
<i class="fa-solid fa-magnifying-glass  right-4 absolute top-3 text-light"></i>
</form>
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
