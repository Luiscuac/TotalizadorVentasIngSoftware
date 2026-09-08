class Totalizador {
    
    calcularNeto(cantidad, precio) {
        return cantidad * precio;
    }

   calcularDescuento(neto) {
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
    }
}

export default Totalizador;