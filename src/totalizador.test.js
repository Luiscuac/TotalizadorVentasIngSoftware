import Totalizador from "./totalizador.js";

describe("Totalizador de Ventas", () => {
    it("deberia calcular el precio neto multiplicando cantidad por precio", () => {
        let totalizadorInstance = new Totalizador();
        expect(totalizadorInstance.calcularNeto(20, 3)).toEqual(60);
    });
});