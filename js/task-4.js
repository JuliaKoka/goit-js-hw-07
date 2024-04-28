const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  const formObject = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  if (elements.email.value === "" || elements.password.value === "") {
    console.log("All form fields must be filled in");
  } else {
    console.log(formObject);
  }

  form.reset();
}
