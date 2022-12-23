//Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


//Object Constructor

function Producto(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const prodcuto2 = new Producto('Monitor de 24 pulgadas', 3000);
console.log(producto2);


