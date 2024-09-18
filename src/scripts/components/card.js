class notesItem extends HTMLElement {
  static observedAttributes = [
    "id",
    "title",
    "body",
    "borrowing-date",
    "deadline",
    "index",
  ];

  constructor() {
    super();

    this._id = this.getAttribute("id");
    this._title = this.getAttribute("title");
    this._body = this.getAttribute("body");
    this["_borrowing-date"] = this.getAttribute("borrowing-date");
    this._deadline = this.getAttribute("deadline");
    this._index = parseInt(this.getAttribute("index"));
  }

  handleDelete() {
    this.dispatchEvent(
      new CustomEvent("book-delete", {
        detail: {
          id: this._id,
        },
        bubbles: true,
      }),
    );
  }
  handleUpdate() {
    this.dispatchEvent(
      new CustomEvent("book-update", {
        detail: {
          id: this._id,
        },
        bubbles: true,
      }),
    );
  }

  handleUnarchived() {
    this.dispatchEvent(
      new CustomEvent("unarchived-notes", {
        detail: {
          id: this._id,
        },
        bubbles: true,
      }),
    );
  }
  connectedCallback() {
    this.render();
  }

  render() {
    // Cek apakah note-item ini berada di dalam elemen dengan id 'notes-lists-archived'
    const isArchived = this.closest("#notes-lists-archived");
    const isNotArchived = this.closest("#notes-lists");

    this.innerHTML = `
    <div class="card" data-aos="flip-up" data-aos-duration="500" data-aos-delay="${
      50 * this._index
    }">
        <div>
            <p class="text-title">${this._title}</p>
            <p class="text-author">${this._body}</p>
        </div>
        <delete-button data-id=${this._id}></delete-button>
        ${
          isArchived
            ? "" // Jika diarsipkan, edit-button tidak ditampilkan
            : `<edit-button data-id=${this._id}></edit-button>` // Jika tidak diarsipkan, tampilkan edit-button
        }
        ${
          isNotArchived
            ? "" // Jika diarsipkan, edit-button tidak ditampilkan
            : `<unarchived-button data-id=${this._id}></unarchived-button>` // Jika tidak diarsipkan, tampilkan edit-button
        }
    </div>
`;

    const deleteButton = this.querySelector("delete-button");
    const editButton = this.querySelector("edit-button");
    const unarchivedButton = this.querySelector("unarchived-button");

    if (deleteButton) {
      deleteButton.addEventListener("click", this.handleDelete);
    }
    if (editButton) {
      editButton.addEventListener("click", this.handleUpdate);
    }

    if (unarchivedButton) {
      unarchivedButton.addEventListener("click", this.handleUnarchived);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;
    this.render();
  }
}

customElements.define("note-item", notesItem);
