const fs = require('fs');

//synchronous blocking code
const inputtxt = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(inputtxt);

const outputtxt = `This is what we know about the ${inputtxt}\nCreated at ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', outputtxt);
