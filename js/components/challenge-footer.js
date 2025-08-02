class ChallengeFooter extends HTMLElement {
  constructor() {
    super();
    this.name = "Your name here";
  }

  static get observedAttributes() {
    return ["name"];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  // connect component
  connectedCallback() {
    // const shadow = this.attachShadow({ mode: "open" });
    this.className = "credits";
    this.setAttribute("data-gfe-screenshot-exclude", true);

    this.innerHTML = `
      A challenge by
      <a
        href="https://www.greatfrontend.com/projects?ref=challenges"
        target="_blank"
        >GreatFrontEnd Projects</a
      >. Built by
      <a
        href="https://www.greatfrontend.com/projects/u/username"
        target="_blank"
        >${this.name}</a
      >.
    `;
  }
}

customElements.define("challenge-footer", ChallengeFooter);
