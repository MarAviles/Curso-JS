const carrito = [];

const producto = {
    nombre: 'Monitos 32 Pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

// .push agrega elementos al final de un arreglo
carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

//Agregar al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);

//Eliminar el último elemento del arreglo
carrito.pop();

console.table(carrito);

//Eliminar del inicio del arreglo
carrito.shift();

console.table(carrito);

//Eliminar (posicion, numero de elementos a eliminar)
carrito.splice(1,1);