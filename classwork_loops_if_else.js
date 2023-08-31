// let num215 = 215

// if (num215 == 215) {
//     console.log('yes');
//     console.log('1');
//     console.log('2');
// }

// if (num215>= 215 && num215 <250) {
//     console.log('Works fine');
// }

// if (num215 > 300) {
//     console.log('num215 not work');
// } else {
//     console.log('work');
// }


// if (num215 > 300) {
//     console.log('num215 not work');
// } else if  (num215>= 250) {
//     console.log('greate 250');
// }
// else if  (num215>= 200) {
//     console.log('greate 200');
// }
// else if (Number.isInteger(num215)) {
//     console.log('num is int');
// }
// else { 
//     console.log('else');
// }


// ternary operator
// let result1 = num215 >= 200 ? 
// console.log('tern true') : 
// console.log('tern faulse');
// console.log('ternary false');

// let resTernary = (num215 >= 200) ? 'tern true' : 
// (num215 >= 250) ? 'tern then 250' :
// 'tern faulse'
// console.log(resTernary);


// // while
// let num = 1
// while (num <= 7) {
//     console.log(num);
//     num++
// }


// do/while
// let num4 = 1
// do {
//     console.log(num4) 
//     num4++
//     console.log(num4);
// } while (num4 <= 7)


// // For
// for (let i = 0; i < 7; i++) {
//     console.log(i);
// }

//  let num = 10
//  let sumOfLoop = 20
// // for (let i = 0; i <= num; i+=2) {
// //     console.log(i)
// //     if (i == 6) break;
// //     sumOfLoop += i
// // }
// // console.log(sumOfLoop);

// for (let i = 0; i <= num; i+=2) {
//     if ( i == 6)
//     console.log(i);
// }
// console.log(sumOfLoop);

// for in
// for of
const obj1 = {prop1:1, prop2:2, prop3:'value3'}
for (let prop in obj1) {
    console.log(prop);
    console.log(`${obj1[prop]}`)
    if (`${obj1[prop]}`== 'New') 
     console.log;
}
const arr1 = ['val1', 'val2', 'val3']
for (let val0 in arr1) {
    console.log(arr1);
}