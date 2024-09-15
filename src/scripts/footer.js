class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer>Copyright Wahyu Pambudi</footer>
        `;
  }
}

customElements.define("my-footer", Footer);
