// ejemplo de uso de objetos en typescript

let objeto: {
    nombre: string,
    edad: number
} = {
    nombre: "Juan",
    edad: 23
}

console.log(objeto.nombre);
console.log(objeto.edad);

// ejemplo de uso de objetos en typescript
let objeto2: {
    nombre: string,
    edad: number,
    saludar: () => void
} = {
    nombre: "Juan",
    edad: 23,
    saludar: () => {
        console.log("Hola");
    }
}

console.log(objeto2.nombre);
console.log(objeto2.edad);
objeto2.saludar();

// ejemplo de uso de objetos en typescript
let objeto3: {
    nombre: string,
    edad: number,
    saludar: (mensaje: string) => void
} = {
    nombre: "Juan",
    edad: 23,
    saludar: (mensaje: string) => {
        console.log(mensaje);
    }
}

console.log(objeto3.nombre);
console.log(objeto3.edad);