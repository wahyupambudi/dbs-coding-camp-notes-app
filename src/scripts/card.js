class Card extends HTMLElement {
  static observedAttributes = ["title", "body"];
  constructor() {
    super();
    this._title = this.getAttribute("title");
    this._body = this.getAttribute("body");
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(title, oldValue, newValue) {
    this[`_${title}`] = newValue;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card mb-3">
        <div class="card-body border border-primary rounded" style="height:150px">
          <div>
            <h3 class="badge text-bg-primary fs-5">${this._title}</h3>
            <p>${this._body}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("my-card", Card);
