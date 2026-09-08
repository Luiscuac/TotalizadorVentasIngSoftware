import totalizador from "./totalizador.js";

describe("Totalizador de Ventas", () => {
    it("deberia calcular el precio neto multiplicando cantidad por precio", () => {
        expect(totalizador(20, 3)).toEqual(60);
    });
});