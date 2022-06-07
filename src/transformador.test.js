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
  it("Devolver seis si se ingresa 6", () => {
    expect(transform(6)).toEqual("seis");
  });
  it("Devolver siete si se ingresa 7", () => {
    expect(transform(7)).toEqual("siete");
  });
  it("Devolver ocho si se ingresa 8", () => {
    expect(transform(8)).toEqual("ocho");
  });
  it("Devolver nueve si se ingresa 9", () => {
    expect(transform(9)).toEqual("nueve");
  });
  
});
