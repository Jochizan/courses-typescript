const persona: {
  nombre: String;
  edad: Number;
  direccion: {
    calle: String;
    comuna: String;
  };
  cursos: Array<String>;
  salute: Function;
} = {
  nombre: 'Rodrigo',
  edad: 34,
  direccion: {
    calle: 'Los presidentes',
    comuna: 'santiago'
  },
  cursos: ['Flutter', 'Patrones de diseño', 'SQL'],
  salute() {
    console.log('Hola mi nombre es', this.nombre);
  }
};

let hoobies: any[]; // ayuda a crear arreglos sin importar el tipo
hoobies = ['Programación', 'Leer', 'Escuchar musica', 1, true, [1, 2]];

console.log(persona);
// persona.salute();
console.log(hoobies);

for (const hoobie of hoobies) {
  console.log(hoobie);
}
