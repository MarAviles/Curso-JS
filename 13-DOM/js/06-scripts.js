const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText); //No encuentra elementos hidden
console.log(encabezado.textContent); //Encuentra todos los elementos
console.log(encabezado.innerHTML);

document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading';

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
