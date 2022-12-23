const reproductor = {
    reproducir: id => console.log(`Reproduciendo cación con el id ${id}`),
    pausar: () => console.log('Pausando...'),
    
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}