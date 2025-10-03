const showModalTemplate = `

  <div
      id="show-modal"
      class="z-50 bg-light/10 fixed hidden top-0 left-0 pt-[100px] w-full h-full overflow-auto"
    >
      <div
        id="modal-content"
        class="w-[50%] rounded-md gap-2 text-light  bg-dark m-auto border flex flex-col relative border-dark p-10"
      >
        <h3 class="font-semibold text-2xl" id="show-title"></h3>
        <span id="show-time" class="text-light/40 text-xs"></span>
        <p class="text-light h-[200px] overflow-y-scroll text-sm" id="show-content"></p>
        <i
          class="fa-solid fa-xmark text-light absolute top-3 right-3"
          id="show-close"
        ></i>
      </div>
  </div>
    `;

class ShowModal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = showModalTemplate;
  }
}

customElements.define("show-modal-component", ShowModal);
