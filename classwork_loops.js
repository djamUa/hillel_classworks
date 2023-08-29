let num215 = 215

if (num215 == 215) {
    console.log('yes');
    console.log('1');
    console.log('2');
}

if (num215>= 215 && num215 <250) {
    console.log('Works fine');
}

if (num215 > 300) {
    console.log('num215 not work');
} else {
    console.log('work');
}


if (num215 > 300) {
    console.log('num215 not work');
} else if (num215>= 250) {
    console.log('greate 250');
}
else if  (num215>= 200) {
    console.log('greate 200');
}
else if (Number.isInteger(num215)) {
    console.log('num is int');
}
else { 
    console.log('else');
}