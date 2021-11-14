const { userName: user, sayHi } = require('./module');

// console.log(sayHi('Lol'))
// console.log(user)

// const userName = 'Fedor';

// const sayHi = name => `Hello, ${name}`;

// console.log(`sayHi(userName)`, sayHi(userName))

console.log(`global`, __dirname);
console.log(`global`, __filename);

// console.log(`global`, process)
console.log(`global`, process.env);

// console.log(`global`, process.argv)
// console.log(`Hello ${process.argv[2]} ${process.argv[3]}`) // node node Fedor Iskandarov

// const url = new URL('https://webDev.com/path/name?name=Fedor&age=31');
// console.log(url)

// const os = require('os');
// console.log(`os`, os.platform(), os.release(), os.version(), os.userInfo())
