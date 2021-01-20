console.log("hello world");

function imprimirMensaje(texto) {
    console.log(texto);
    console.log(this);
}

// Forma de crear un objeto en el 
// estandar ES5
function Auto(argMarca, argModelo, argAnio, argMes) {
    this.marca = argMarca;
    this.modelo = argModelo;
    this.anio = argAnio;
    this.anio.mes = argMes;

    this.arrancar = imprimirMensaje;
    //function () { return "El auto arrancó"; };
    
    this.pagasPatente = function (anioHoy) { 
        var pago = (anioHoy - this.anio)
        return  (pago < 5);
    }
}

var myAuto = new Auto("Fiat", "Duna", 1990, "Junio");

var myOtroAuto = new Auto("Ford", "K", 1999, "Mayo");

// Que es el this
//this 

var nombrePropiedad = "marcalalalal";

var marcaDeAuto = myAuto[nombrePropiedad];

console.log(marcaDeAuto);

var marcaDeAutoSinVariable = myAuto.marca;
// Equivalente myAuto["marca"];

console.log(marcaDeAutoSinVariable);

console.log(myAuto.arrancar());

imprimirMensaje("hola");