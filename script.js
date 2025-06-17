// Espera a que cargue el doc index
document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("como");
  const otroDiv = document.getElementById("otro-especificar");
  const form = document.getElementById("formulario-contacto");

  // funcion de "otro"
  select.addEventListener("change", function () {
    if (select.value === "otro") {
      // al elegir "otro", muestra la textarea
      otroDiv.style.display = "block";
    } else {
      // Al elegir las otras, se oculta la textarea
      otroDiv.style.display = "none";
    }
  });

  // Envio de formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Gracias por contactarte con nosotros, en 48 hs hábiles recibiras nuestra respuesta :)");

    form.reset(); 
    otroDiv.style.display = "none"; // Oculta el textarea que estaba visible
  });
});