const footerTemplate = `
    <footer class="z-10 fixed bottom-0 right-0 w-3/4">
      <div class="flex flex-col max-w-6xl w-full bg-dark border-t border-light">
        <div
          class="flex items-center w-full justify-center text-light py-3 text-sm"
        >
          Copyright © 2025 Just Fitra All Rights Reserved
        </div>
      </div>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = footerTemplate;
  }
}

customElements.define("footer-component", Footer);
