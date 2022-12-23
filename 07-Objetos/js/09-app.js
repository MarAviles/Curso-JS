"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//No se pueden agregar, ni eliminar propiedades existente pero si se pueden modificar
Object.seal( producto );

producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);

console.log(Object.isSeal(producto));