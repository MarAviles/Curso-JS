const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 500},
    { nombre: 'Celular', precio: 700}
]

const nuevoArreglo = carrito.forEach( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

//Crea un nuevo arreglo
const nuevoArreglo2 = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

