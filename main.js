document
  .getElementById("simpleForm")
  .addEventListener("submit", function (event) {
    if (!document.getElementById("terms").checked) {
      alert("Debe aceptar los términos y condiciones.");
      event.preventDefault();
    }
  });