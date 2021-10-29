// Void
//
// Tipo explicito

function showInfo(user: any) {
  console.log('User Info', user.id, user.username, user.firstName);
}

showInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });

// Tipo inferido
function showFormattedInfo(user: any) {
  console.log(
    'User Info',
    `
              id: ${user.id}
              username: ${user.username}
              firstName: ${user.firstName}
    `
  );
}

showFormattedInfo({ id: 1, username: 'luixaviles', firstName: 'Jochizan' });

// tipo void, como tipo de dato en variable
let unusable: void;
unusable = null;
unusable = undefined;

// Tipo: Never

function handleError(code: number, message: string) {
  // process your code here
  // Generate a message
  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, 'Not Found');
} catch (err) {}

// Esta función nunca acaba
function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
  //return sum;
}

sumNumbers(10);
