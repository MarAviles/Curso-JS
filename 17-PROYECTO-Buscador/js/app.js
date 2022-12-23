const resultado = document.querySelector('#resultado')
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const max = new Date().getFullYear();
console.log(max);
const min = max - 10;
console.log(min);

//Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //Muestra los automóviles
    llenarSelect();
});

//AddEventListener para los select de búsqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
});

function mostrarAutos(){
    autos.forEach( ({marca, modelo, year, puertas, transmision, precio, color}) => {
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `  
        
        resultado.appendChild(autoHTML);
    });
}

//Genera los años del select
function llenarSelect(){

    for(let i = max; i > min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

//Funcion
function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca )

    console.log(resultado);
}

function filtrarMarca(auto) {
    if( datosBusqueda.marca ) {
        console.log(auto.marca == datosBusqueda.marca);
        return auto.marca == datosBusqueda.marca;
    }
    return auto;
}