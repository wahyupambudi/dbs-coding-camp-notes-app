class Form extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container">
            <div class="card">
            <form id="form-input" class="card-body c-card">
                <div class="c-form-item">
                <label class="mb-2" for="title">Title Notes</label>
                <input id="title" name="title" type="text" class="form-control border border-primary"
                    aria-describedby="title-description" minlength="6" required>
                <span id="title-description" class="fs-6 text-danger"></span>
                </div>
                <div class="c-form-item">
                <label class="mb-2" for="body">Body Notes</label>
                <textarea class="form-control border border-primary" id="body" name="body" rows="3"
                    aria-describedby="body-description" minlength="20" required></textarea>
                <span id="body-description" class="fs-6 text-danger"></span>
                </div>
                <button class="btn btn-primary">Create</button>
            </form>
            </div>
        </div>

        `;
  }
}

customElements.define("form-notes", Form);
