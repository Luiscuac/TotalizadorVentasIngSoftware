import Totalizador from "./totalizador.js";

describe("Totalizador de Ventas", () => {
    it("deberia calcular el precio neto multiplicando cantidad por precio", () => {
        let totalizadorInstance = new Totalizador();
        expect(totalizadorInstance.calcularNeto(20, 3)).toEqual(60);
    });
    it("deberia calcular 3% de descuento para un precio neto de 1000", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularDescuento(1000)).toEqual(30); 
    });
    it("deberia calcular 5% de descuento para un precio neto de 3000", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularDescuento(3000)).toEqual(150); 
    });
    it("deberia calcular 7% de descuento para un precio neto de 7000", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularDescuento(7000)).toEqual(490); 
    });
    it("deberia calcular 10% de descuento para un precio neto de 10000", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularDescuento(10000)).toEqual(1000); 
    });
    it("deberia calcular 15% de descuento para un precio neto de 30000", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularDescuento(30000)).toEqual(4500); 
    });

    //calcular impuesto
    it("deberia calcular el monto del impuesto basado en la base imponible y el estado", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularMontoImpuesto(60, "TX")).toEqual(3.75);
    });

});