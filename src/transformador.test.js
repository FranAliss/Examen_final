import transform from "./transform.js";

describe("Transformar", () => {
  it("Devolver vacio si no se ingresa nada", () => {
    expect(transform('')).toEqual("");
  });
  it("Devolver uno si se ingresa 1", () => {
    expect(transform(1)).toEqual("uno");
  });
  it("Devolver dos si se ingresa 2", () => {
    expect(transform(2)).toEqual("dos");
  });
  it("Devolver tres si se ingresa 3", () => {
    expect(transform(3)).toEqual("tres");
  });
  it("Devolver cuatro si se ingresa 4", () => {
    expect(transform(4)).toEqual("cuatro");
  });
  it("Devolver cinco si se ingresa 5", () => {
    expect(transform(5)).toEqual("cinco");
  });
  
});
