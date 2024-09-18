const formValidation = (formInput) => {
  const titleFormInput = formInput.elements.title;
  const bodyFormInput = formInput.elements.body;

  const blurEventHandler = (event) => {
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

  const customValidationMinChar = (event) => {
    event.target.setCustomValidity("");
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Please fill out this field.");
      return;
    }

    if (event.target.validity.tooShort) {
      event.target.setCustomValidity(
        " Fill with minimum length 3 character :) ",
      );
      return;
    }
  };

  titleFormInput.addEventListener("change", customValidationMinChar);
  titleFormInput.addEventListener("invalid", customValidationMinChar);
  titleFormInput.addEventListener("blur", blurEventHandler);

  bodyFormInput.addEventListener("change", customValidationMinChar);
  bodyFormInput.addEventListener("invalid", customValidationMinChar);
  bodyFormInput.addEventListener("blur", blurEventHandler);
};

export default formValidation;
