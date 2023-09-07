const objMy = {name: 'Vlad', lName: 'Kol', age: 31}
const testDataEnv2 = {url:'url2', username: 'user2'}
const testDataEnv1 = {
    url: 'Url',
    username: 'user1',
    getThisProp() {
        return this.url
    }
}


function getPropColor() {
    this.color = 'red'
}
addPropColor.prototype = objMy
const objMy2 = new addPropColor()
console.log(Object.values(objMy2));
function getSecondProp() {
    return this.age;
}


// objMy.getAllProp = getAllProp
// testDataEnv2.getAllProp = getAllProp;

// console.log(objMy.getAllProp());
// let getValFromObj = testDataEnv1.getThisProp()
// console.log(getValFromObj);