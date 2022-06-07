import transform from "./transform.js";

describe("Transformar", () => {
  it("Devolver vacio si no se ingresa nada", () => {
    expect(transform('')).toEqual("");
  });
});
