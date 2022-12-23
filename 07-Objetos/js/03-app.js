//Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Agregar productos
producto.imagen = "imagen.jpg";

//Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);

