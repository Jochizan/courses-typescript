const persona: {
  nombre: string;
  edad: number;
  direccion: {
    calle: string;
    comuna: string;
  };
  salute: Function;
} = {
  nombre: 'Rodrigo',
  edad: 34,
  direccion: {
    calle: 'Los presidentes',
    comuna: 'santiago'
  },
  salute() {
    console.log('Hola mi nombre es', this.nombre);
  }
};

console.log(persona);
persona.salute();