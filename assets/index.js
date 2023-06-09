// Por cada artículo vendido se conoce su nombre, precio y cantidad. De desea conocer: a) 
// subtotal de cada artículo, b) subtotal de la factura, c) 16% de IVA y total de la factura al 
// aplicarlo.

class Producto{
    nombre;
    precio;
    cantidad;

    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    generarSudtotal(){
        return this.cantidad*this.precio;
    }
}
const producto1 = new Producto("computadora" , 100, 5);
document.getElementById('producto1').innerHTML = producto1.nombre + ":" + producto1.generarSudtotal() + '$';

const producto2 = new Producto("mouse" , 30, 15);
document.getElementById('producto2').innerHTML = producto2.nombre + ":" + producto2.generarSudtotal();

const producto3 = new Producto("audifonos" , 50, 10);
document.getElementById('producto3').innerHTML = producto3.nombre + ":" + producto3.generarSudtotal();

const producto4 = new Producto("adactadores" , 20, 50);
document.getElementById('producto4').innerHTML = producto4.nombre + ":" + producto4.generarSudtotal();

const producto5 = new Producto("teclados" , 40, 30);
document.getElementById('producto5').innerHTML = producto5.nombre + ":" + producto5.generarSudtotal();

const total = 
producto1.generarSudtotal() + 
producto2.generarSudtotal() + 
producto3.generarSudtotal() +
producto4.generarSudtotal() +
producto5.generarSudtotal();

document.getElementById("totalCompra").innerHTML = total + "$";

const IVA = total* 0.16;
document.getElementById("totalCompraIVA").innerHTML = IVA + "$";