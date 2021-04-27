var persona = {
    nombre: 'Rodrigo',
    edad: 34,
    direccion: {
        calle: 'Los presidentes',
        comuna: 'santiago'
    },
    salute: function () {
        console.log('Hola mi nombre es', this.nombre);
    }
};
console.log(persona);
persona.salute();
