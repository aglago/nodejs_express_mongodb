const fs = require('fs');

fs.readFile('./txt/file.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('ERROR');
    console.log(data1);
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        if (err) return console.log("ERROR");
        console.log(data2);
        fs.writeFile('./txt/final.txt', `${data2}\nThat is the end`, 'utf-8', (err, data3) => {
            if (err) return console.log("ERROR");
            console.log("File written!");
        });
    })
})

console.log('this is the last line');