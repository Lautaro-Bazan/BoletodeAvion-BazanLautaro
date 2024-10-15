function obtenerPrecio(tipoPasaje, destino) {
    let precio;
    if (tipoPasaje === "vip") {
        switch (destino) {
        case "new york":
            precio = 2000;
            break;
        case "paris":
            precio = 1800;
            break;
        case "tokyo":
            precio = 2500;
            break;
        default:
            alert("Opcion no valida");
            break;
        }
    } else {
        switch (destino) {
        case "new york":
            precio = 1000;
            break;
        case "paris":
            precio = 900;
            break;
        case "tokyo":
            precio = 1200;
            break;
        default:
            alert("Opcion no valida");
            break;
        }
    }
    return precio;
}
function calcularPrecioConIVA(precio) {
    const iva = 0.21;
    return precio + (precio * iva);
}

function generarticket(tipoPasaje, destino, precio, nombre, apellido, ciudad, edad, preciototal) {

    let usuario = [nombre, apellido, ciudad];    
    alert("Destino: " + destino + "\nTipo de pasaje: " + tipoPasaje + "\nPrecio: $" + precio + "\nprecio con IVA: $" + preciototal + "\nNombre: " + usuario[0] + "\nApellido: " + usuario[1] + "\nCiudad de origen: " + usuario[2] + "\nEdad del pasajero: " + edad);
        
}
function simularCompraPasaje() {
    let continuar = true;
    while (continuar) {
        let tipoPasaje = prompt("Ingrese el tipo de pasaje (VIP o Estandar):").toLowerCase();
        let destino = prompt("Ingrese el destino (New York, Paris, Tokyo):").toLowerCase();
        let precio = obtenerPrecio(tipoPasaje, destino);        
        let nombre = prompt("Ingrese su nombre:");
        let apellido = prompt("Ingrese su apellido:");
        let ciudad = prompt("Ingrese la ciudad donde vive:");
        let edad = prompt("Ingrese su edad:");
        let preciototal = calcularPrecioConIVA(precio);
        
        generarticket(tipoPasaje, destino, precio,nombre, apellido, ciudad, edad, preciototal);
        
        let confirmar = prompt("desea comprar otro pasaje si/no?").toLowerCase();
        if(confirmar === "no"){
            continuar = false;
        }
        else{
            continuar = true;
        }
        
    }  
}
  // Llamada a la función para simular la compra del pasaje
simularCompraPasaje();
