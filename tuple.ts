
type vehicleType = [string, number, string];

let car: vehicleType = ['mazda', 2020, 'rojo'];
let vehicle: vehicleType = ['hello', 1020, 'blue'];
let motorcycle: [string, number, string] = ['yamaha', 2020, 'rojo'];
// podríamos cambiar el tipado aquí para no repetir código

vehicle[1] = 2000;
car[1] = 2021;

console.log(car);
console.log(vehicle);
