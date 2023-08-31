// const values = ('./json_classwork5.json')

// console.log(values);

const { error } = require('console');
const fs = require('fs-extra')

const path = './json_classwork5.json'
const newDate = {phone: 123455, adress: 'Street'}

let readDate
try {
fs.readFile(path, 'utf-8', (error, date) =>{
    if(error) {
        console.log('Error');
    } else {
        readDate = JSON.parse(data)
    }
})
readDate.readData.adress = 'Street'

fs.writeFile(path,JSON.stringify(readDate));

} catch {
    console.log('Error code');
}
// let readDate = fs.readFile((path, (error,data)=> 
// if (error) {console.log(error)
// }
// ))

// function Func() {
// fs.writeFile(path).then(rDate) => {
//     return
// }

// console.log();

// fs.writeFile(path, JSON.stringify(newDate));
