class Totalizador {
    
    calcularNeto(cantidad, precio) {
        return cantidad * precio;
    }

   calcularDescuento(neto) {
        if(neto >= 1000) {
            return neto * 0.03
        }
    }
}

export default Totalizador;