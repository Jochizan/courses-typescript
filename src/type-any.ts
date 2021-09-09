// Explicit type
let idUser: any;

idUser = 1; // number
idUser = '1'; // string

console.log('idUser', idUser);

// Inferred type
let otherId;
otherId = '1';
otherId = 1;

// otherId = true;
console.log('otherId ', otherId);
console.log(typeof otherId);

let suprise: any = 'Hello typescript';
// suprise.sayHello(); // Error
const res = suprise.substring(10);
console.log(`res ${res}`);
