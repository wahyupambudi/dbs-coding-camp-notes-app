import "./components/index.js";
import formValidation from "./form-validation.js";
import Swal, * as Sweetalert2 from "sweetalert2";
import AOS from "aos";
import "../styles/style.css";
import "aos/dist/aos.css";
import {
  addNotes,
  getAllNotes,
  getAllNotesArchived,
  deleteNotes,
  editNotes,
  unarchivedNotes,
} from "./data/api.js";

const RENDER_EVENT = "RENDER_EVENT";

const formInput = document.getElementById("add-form");

formInput.addEventListener("submit", async (e) => {
  e.preventDefault();

  const loadingOverlay = document.createElement("loading-overlay");
  document.body.appendChild(loadingOverlay);

  const title = formInput.elements.title.value;
  const body = formInput.elements.body.value;

  const newBook = {
    // id: +new Date(),
    title,
    body,
  };

  setTimeout(async () => {
    // TODO : panggil function addNotes
    await addNotes(newBook);
    loadingOverlay.remove();

    Sweetalert2.fire({
      title: "Buku berhasil ditambahkan",
      icon: "success",
      confirmButtonText: "OK",
    });
    document.dispatchEvent(new Event(RENDER_EVENT));

    formInput.reset();
  }, 1000);
});

function deleteNotesHandler(bookId) {
  Sweetalert2.fire({
    title: "Are u sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya",
    cancelButtonText: "Batal",
    cancelButtonColor: "#dc3545",
    confirmButtonColor: "#007bff",
  }).then(async (result) => {
    if (result.isConfirmed) {
      // TODO : panggil function deleteNotes
      await deleteNotes(bookId);
      Sweetalert2.fire({
        title: "Buku berhasil dihapus",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
        position: "top-end",
      });
      document.dispatchEvent(new Event(RENDER_EVENT));
    }
  });
}

async function updateBookHandler(bookId) {
  const formEdit = document.getElementById(bookId);
  console.log(formEdit);

  Sweetalert2.fire({
    title: "Are u Sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya",
    cancelButtonText: "Batal",
    cancelButtonColor: "#dc3545",
    confirmButtonColor: "#007bff",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const newBook = {
        id: bookId,
        archived: true,
      };
      await editNotes(newBook);
      Sweetalert2.fire({
        title: "Notes Archived",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
        position: "top-end",
      });
      document.dispatchEvent(new Event(RENDER_EVENT));
    }
  });
}

async function unarchivedHandler(bookId) {
  const formEdit = document.getElementById(bookId);
  console.log(formEdit);

  Sweetalert2.fire({
    title: "Are u Sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya",
    cancelButtonText: "Batal",
    cancelButtonColor: "#dc3545",
    confirmButtonColor: "#007bff",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const newBook = {
        id: bookId,
        archived: false,
      };
      await unarchivedNotes(newBook);
      Sweetalert2.fire({
        title: "Notes Archived",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
        position: "top-end",
      });
      document.dispatchEvent(new Event(RENDER_EVENT));
    }
  });
}

function createBookElement(notesItem, index) {
  const bookElement = document.createElement("note-item");
  bookElement.setAttribute("id", notesItem.id);
  bookElement.setAttribute("title", notesItem.title);
  bookElement.setAttribute("body", notesItem.body);
  bookElement.setAttribute("index", index);
  bookElement.addEventListener("book-delete", (event) => {
    deleteNotesHandler(notesItem.id);
  });
  bookElement.addEventListener("book-update", (event) => {
    updateBookHandler(notesItem.id, notesItem.title, notesItem.body);
  });

  bookElement.addEventListener("unarchived-notes", (event) => {
    unarchivedHandler(notesItem.id, notesItem.title, notesItem.body);
  });
  return bookElement;
}

document.addEventListener(RENDER_EVENT, async function () {
  const bookList = document.getElementById("notes-lists");
  const loading = document.getElementById("loading");

  bookList.innerHTML = "";

  //   loading
  const loadingIndicator = document.createElement("loading-indicator");
  loading.appendChild(loadingIndicator);

  setTimeout(async () => {
    const BOOKS = await getAllNotes();
    console.log(BOOKS);
    // remove loading
    loadingIndicator.remove();

    let index = 1;
    for (const notesItem of BOOKS) {
      bookList.append(createBookElement(notesItem, index));
      index++;
    }
  }, 1000);
});

document.addEventListener(RENDER_EVENT, async function (bookId) {
  let bookList = document.getElementById("notes-lists-archived");
  const loadingx = document.getElementById("loadingx");

  bookList.innerHTML = "";

  //   loading
  const loadingIndicator = document.createElement("loading-indicator");
  loadingx.appendChild(loadingIndicator);

  setTimeout(async () => {
    const BOOKS = await getAllNotesArchived();
    console.log(BOOKS);
    // remove loading
    loadingIndicator.remove();

    let index = 1;
    for (const notesItemArchived of BOOKS) {
      bookList.append(createBookElement(notesItemArchived, index));
      index++;
    }
  }, 1000);
});

document.addEventListener("DOMContentLoaded", async () => {
  AOS.init();

  document.dispatchEvent(new Event(RENDER_EVENT));
});
