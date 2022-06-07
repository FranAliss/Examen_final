import transform from "./transform.js";

describe("Transformar", () => {
  it("Devolver vacio si no se ingresa nada", () => {
    expect(transform('')).toEqual("");
  });
  it("Devolver uno si no se ingresa 1", () => {
    expect(transform(1)).toEqual("uno");
  });
  it("Devolver dos si no se ingresa 2", () => {
    expect(transform(2)).toEqual("dos");
  });
  
});
