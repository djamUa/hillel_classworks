let arr1 =['kia', 'vlad', 1992, 'qwerty', 9999, true, function() {console.log('hi arrey');
    
}]

// let value = arr1[3]
// console.log(value);

arr1[3] = 'New'

// console.log(arr1[3]);
// console.log(arr1);

// arr1[6]()

// let lArr1 = arr1.length
// console.log(lArr1);

// console.log(arr1.at(-3))
async function getOnlyString (baseArr) {
let result = [];
resultWithupperC = [];


for (let i = 0; i < baseArr.length; i++) {
    // console.log(arr1[i]);
    resultWithupperC = []
    let result = [];

    if (typeof baseArr[i] === 'string') {
    await result.push(baseArr[i])
}
}

for (let y = 0; y < result.length; y++) {
let word = result.at(y)
let firstLetter = String (word[0]).toUpperCase()
let restLettets = String(word.slice(1))
resultWithupperC.push(firstLetter + restLettets)
}
console.log(resultWithupperC);
}
getOnlyString(arr1)
// console.log(result);
// console.log(resultWithupperC);