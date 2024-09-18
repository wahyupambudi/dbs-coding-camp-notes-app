import formValidation from "../form-validation";

class BookForm extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    await this.render();
    formValidation(document.getElementById(this.getAttribute("form-id")));
  }

  async render() {
    this.innerHTML = ` <form
            id=${this.getAttribute("form-id")}
            class="card-body c-card form-input"
            data-aos="fade-down"
        >
            <form-control
                input-name="title"
                label="Title Notes"
                placeholder="ex : Eating Rendang"
                min-length="3"
                description="Fill with title notes minimum length 3 character :) "
            ></form-control>
            <form-control
                input-name="body"
                label="Body Notes"
                placeholder="ex: Eating rendang with mom tomorrow"
                min-length="3"
                description="Fill with body notes minimum length 3 character :)"
            ></form-control>

            <button class="btn btn-primary" id="save-button">Submit</button>
        </form>`;
  }
}

customElements.define("book-form", BookForm);
