const numbers = [1, 30, 49, 29, 10, 13];

let rta = true;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element >= 40) {
    rta = false;
    break;
  }
}

console.log('rta', rta);
const rta2 = numbers.every((element) => element <= 40);

console.log('rta2', rta2);

const team = [
  {
    name: 'Fulano',
    age: 30
  },
  {
    name: 'Sutano',
    age: 40
  },
  {
    name: 'Mengano',
    age: 50
  },
  {
    name: 'Merdano',
    age: 60
  }
];

const rtaReto = team.every((element) => element.age >= 40);

console.log(rtaReto);