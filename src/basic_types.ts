console.log('prueba!');

// Number Explicit

let phone: number;
// phone = '+367128815'; --> Error de tipo
phone = 924234669;

// Number inferred
let phoneMovil = 637128815;
// let phoneMovil = true; --> Error esta definido antes

let hex: number = 0xf00d;
let binary: number = 0b101;
let octal: number = 0o744;

// Type: Boolean
let isPro: boolean;
isPro = true;
// isPro = 1; --> Error

// String
let username: string = 'anbreaker';
username = 'Javier';
// username = true; --> Error

// Template String with use of back-tick ``
let userInfo: string;
userInfo = `
    User info:
    username: ${username}
    firtsname: ${username + ' anbreaker'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('userInfo', userInfo);
