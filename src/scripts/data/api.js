import Swal from "sweetalert2";

const BASE_URL = "https://notes-api.dicoding.dev/v2";

function showAlert(error) {
  Swal.fire({
    title: "Oops...",
    text: error.message,
    icon: "error",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
  });
}

//  TODO : Buat fungsi untuk memanggil API disini
function getAllNotes() {
  return fetch(`${BASE_URL}/notes`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }
      return response.json();
    })
    .then((data) => data.data)
    .catch((error) => {
      showAlert(error);
    });
}

function getAllNotesArchived() {
  return fetch(`${BASE_URL}/notes/archived`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }
      return response.json();
    })
    .then((data) => data.data)
    .catch((error) => {
      showAlert(error);
    });
}

async function addNotes({ id, title, body }) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": "12345",
    },
    body: JSON.stringify({ id, title, body }),
  };
  const response = await fetch(`${BASE_URL}/notes`, options);
  const responseJSON = await response.json();
  return responseJSON;
}

async function editNotes({ id, title, body, archived }) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": "12345",
    },
    body: JSON.stringify({ id, title, body, archived }),
  };
  const response = await fetch(`${BASE_URL}/notes/${id}/archive`, options);
  const responseJSON = await response.json();
  return responseJSON;
}

async function unarchivedNotes({ id, title, body, archived }) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": "12345",
    },
    body: JSON.stringify({ id, title, body, archived }),
  };
  const response = await fetch(`${BASE_URL}/notes/${id}/unarchive`, options);
  const responseJSON = await response.json();
  return responseJSON;
}

async function deleteNotes(id) {
  return fetch(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
    headers: {
      "X-Auth-Token": "12345",
    },
  })
    .then((response) => response.json())
    .then((data) => data.books);
}

export {
  getAllNotes,
  getAllNotesArchived,
  addNotes,
  editNotes,
  unarchivedNotes,
  deleteNotes,
};
