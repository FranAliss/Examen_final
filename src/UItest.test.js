import transform from "./transform.js";
import fs from "fs";

describe("Transformar numero", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("Mostrar el vacio despues de presionar el boton de 'transformar'", () => {
    let boton = document.querySelector("#botonTransform");
    const div = document.querySelector("#resultado-div");
    boton.click();
    
    expect(div.innerHTML).toEqual("<p></p>");
  });

  it("Mostrar la casilla de entrada de numero", () => {
    let boton = document.querySelector("#botonTransform");
    const casilla = document.querySelector("#numero");
    boton.click();
    
    expect(casilla.style.display).toEqual("");
  });
}); 