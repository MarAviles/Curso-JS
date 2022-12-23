const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Retorna las llaves del objeto
console.log(Object.keys( producto ));

//Retorna los valores
console.log( Object.values( producto ));

//Retornas las llaves y los valores
console.log(Object.entries(producto));