const headerTemplate = `

 <header>
      <nav class="w-full py-3 border-b border-light/50">
        <div class="flex flex-col justify-between px-[50px]">
          <div class="">
            <h1 class="text-4xl font-semibold">MyNotes.com</h1>
          </div>
          <p class="text-light mt-2">
            Application for documentation your journal or your notes
          </p>
          <ul class="flex gap-2 mt-5">
            <li
              id="notes"
              class="border px-3 py-0.5 rounded-full bg-primary/5 hover:bg-primary hover:text-secondary ease-in-out transition-all duration-200 cursor-pointer"
            >
              <a href="about.html">Notes</a>
            </li>
            <li
              id="pageId"
              class="border px-3 py-0.5 rounded-full bg-primary/5 hover:bg-primary hover:text-secondary ease-in-out transition-all duration-200 cursor-pointer"
            >
              <a href="about.html">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = headerTemplate;
  }
}

customElements.define("header-component", Header);
