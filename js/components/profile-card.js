class ProfileCard extends HTMLElement {
  constructor() {
    super();
    this.src = "";
    this.name = "Your name";
    this.handle = "@yourname";
    this.description =
      "Lorem ipsum dolor sit amet consectetur adipiscing elit.";
  }

  static get observedAttributes() {
    return ["name", "handle", "description", "src"];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;

    console.log(property, newValue);
  }

  // connect component
  connectedCallback() {
    // const shadow = this.attachShadow({ mode: "open" });
    this.className = "w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg";

    this.innerHTML = `
        <div class="flex justify-center items-center gap-4 self-stretch">
          <div class="w-12 h-12">
            <img class="w-12 h-12 object-cover" src="${this.src}" />
          </div>
          <div class="flex flex-col gap-px grow">
            <span class="font-semibold text-lg text-justify text-neutral-900">${this.name}</span>
            <span class="font-normal text-sm text-neutral-600">${this.handle}</span>
          </div>
        </div>
        <span class="font-normal text-base text-neutral-600">
         ${this.description}
        </span>
    `;
  }
}

customElements.define("profile-card", ProfileCard);
