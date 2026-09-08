class Totalizador {
    
    calcularNeto(cantidad, precio) {
        return cantidad * precio;
    }

   calcularDescuento(neto) {
        if(neto >=30000){
            return Number((neto * 0.15).toFixed(2));
        }
        if(neto >= 10000){
            return Number((neto * 0.1).toFixed(2));
        }
        if (neto >= 7000){
            return Number((neto * 0.07).toFixed(2));
        }
        if(neto>=3000){
            return Number((neto * 0.05).toFixed(2));
        }
        if(neto >= 1000) {
            return Number((neto * 0.03).toFixed(2));
        }
        return 0;
    }

    calcularMontoImpuesto(base, estado) {
        const tasasImpuesto = {
            "UT": 0.0665,
            "NV": 0.0800,
            "TX": 0.0625,
            "AL": 0.0400,
            "CA": 0.0825
        };
        
        const tasa = tasasImpuesto[estado] || 0;
        return Number((base * tasa).toFixed(2));
    }

    calcularTotalFinal(cantidad, precio, estado) {
        
        const neto = this.calcularNeto(cantidad, precio);

        const descuento = this.calcularDescuento(neto);

        const precioConDescuento = neto - descuento;
        
        const impuesto = this.calcularMontoImpuesto(precioConDescuento, estado);

        return precioConDescuento + impuesto;
    }
}

export default Totalizador;