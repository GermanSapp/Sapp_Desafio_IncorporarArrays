//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, tipo, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.tipo = tipo;
        this.stock = stock;
    }
}

//Inicializo arrays para las categorias de los productos
const valvulas = [];
const electronicos = [];
const instrumentos = [];

//Cargo el stock de productos segun su categoria
//VALVULAS
valvulas.push(new Producto("Válvula El-34", 1, 2000, "Negro", 30));
valvulas.push(new Producto("Válvula Jj 6l6 Gc", 2, 1400, "Blanco", 10));
valvulas.push(new Producto("Valvula Mullard El84", 3, 1400, "Blanco", 20));
valvulas.push(new Producto("Válvula Sovtek 5ar4", 4, 1400, "Blanco", 15));
//ELECTRONICOS
electronicos.push(new Producto("Pack X 5 Capacitor Poliester 0.068uf 100v", 5, 4000, "Negro", 20));
electronicos.push(new Producto("Pack X 5 Potenciometro 5k Ohms LineaL", 6, 3800, "Negro", 40));
electronicos.push(new Producto("Pack X 5 Transistor 2n2222", 7, 3800, "Negro", 40));
//INSTRUMENTOS
instrumentos.push(new Producto("Multímetro Barovo con funda", 8, 2900, "Negro", 10));
instrumentos.push(new Producto("Amperímetro analogico para gabinete", 9, 1000, "Negro", 10));


//Recorro los arrays para mostrarle los productos al usuario
for (const valvula of valvulas) {
    alert("ID (" + valvula.id + ") - " + valvula.nombre);
}
for (const electronico of electronicos) {
    alert("ID (" + electronico.id + ") - " + electronico.nombre);
}
for (const instrumento of instrumentos) {
    alert("ID (" + instrumento.id + ") - " + instrumento.nombre);
}

//Solicito al usuario el ID del producto
let productoSeleccionado = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
const valvulaBuscada = valvulas.find(valvula => valvula.id === productoSeleccionado);
const electronicoBuscado = electronicos.find(electronico => electronico.id == productoSeleccionado);
const instrumentoBuscado = instrumentos.find(instrumento => instrumento.id == productoSeleccionado);

if (productoSeleccionado <= 0) {
    alert("Ingresa un ID valido");
} else if (productoSeleccionado <=4) {
    alert("Seleccionaste " +  valvulaBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito"); 
} else if (productoSeleccionado <=7) {
    alert("Seleccionaste " + electronicoBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else if (productoSeleccionado <= 9) {
    alert("Seleccionaste " + instrumentoBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else {
    alert("Ingresa un ID valido");
}