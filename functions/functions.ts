const sumar = (num1: number, num2: number): number => num1 + num2;

const division = (a: number, b: number): number => a / b;

const imprimir = (): void => {
  console.log(sumar(12, 100));
  return undefined;
};

const und = imprimir();
console.log(und);
console.log(sumar(10, 100));
console.log(division(100, 7));
