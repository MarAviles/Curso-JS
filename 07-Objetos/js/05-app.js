const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

console.log(producto.informacion.medidas.peso);


const { nombre, informacion, informacion: { fabricacion: { pais} }} = producto;

console.log(pais);
console.log(informacion);