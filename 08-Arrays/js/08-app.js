const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}


// const nombre = producto.nombre;
// console.log(nombre);

const {nombre, precio } = producto;

//Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, tercero] = numeros;
const [primero2, segundo2, ...tercero2] = numeros;
const [ , , tercero3] = numeros;
