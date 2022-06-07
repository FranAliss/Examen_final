import transform from "./transform.js";

const numero = document.querySelector("#numero");
const form = document.querySelector("#numeros-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const num = Number.parseInt(numero.value);

  div.innerHTML = "<p>" + transform(num) + "</p>";
});
