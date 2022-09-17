const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const mail = formEl.email.value;
  const password = formEl.password.value;

  if (mail === "" || password === "") {
    alert("Please fill empty fields");
  }

  const formData = {
    mail,
    password,
  };

  console.log(formData);

  form.reset();
}
