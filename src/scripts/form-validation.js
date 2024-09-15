const formValidation = () => {
  const formInput = document.getElementById("form-input");
  const titleFormInput = formInput.elements.title;
  const bodyFormInput = formInput.elements.body;

  const blurEventHandler = (event) => {
    // Validate the field
    const isValid = event.target.validity.valid;
    const errorMessage = event.target.validationMessage;

    const connectedValidationId = event.target.getAttribute("aria-describedby");
    const connectedValidationEl = connectedValidationId
      ? document.getElementById(connectedValidationId)
      : null;

    if (connectedValidationEl && errorMessage && !isValid) {
      connectedValidationEl.innerText = errorMessage;
      connectedValidationEl.classList.remove("text-dark");
      connectedValidationEl.classList.add("text-danger");
    } else {
      connectedValidationEl.innerText =
        connectedValidationEl.dataset.defaulttext || "";
      connectedValidationEl.classList.remove("text-danger");
      connectedValidationEl.classList.add("text-dark");
    }
  };

  const customValidationNameHandler = (event) => {
    event.target.setCustomValidity("");
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Please fill out this field :(.");
      return;
    }

    if (event.target.validity.tooShort) {
      event.target.setCustomValidity("Minimum Length 6 Character :)");
      return;
    }
  };

  titleFormInput.addEventListener("change", customValidationNameHandler);
  titleFormInput.addEventListener("invalid", customValidationNameHandler);
  titleFormInput.addEventListener("blur", blurEventHandler);

  const customValidationDeadlineHandler = (event) => {
    event.target.setCustomValidity("");

    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Please fill out this field :(.");
      return;
    }

    if (event.target.validity.tooShort) {
      event.target.setCustomValidity("Minimum Length 20 Character :)");
      return;
    }
  };

  bodyFormInput.addEventListener("change", customValidationDeadlineHandler);
  bodyFormInput.addEventListener("invalid", customValidationDeadlineHandler);
  bodyFormInput.addEventListener("blur", blurEventHandler);
};

export default formValidation;
