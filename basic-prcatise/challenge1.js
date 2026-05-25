const { num } = require("./if-else")

let name = "Ayush Singh"
let age = 20
let city = "Gwl"
let married = false

console.log("Myname is " + name + " and I am " + age + " years old. I live in " + city + ". Am I married? " + married)

console.log(typeof (name))

console.log(typeof (age))

let arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(typeof (arr))

let obj = {
    name: "Ayush",
    age: 20,
    city: "Gwl"
}
console.log(obj)
console.log(typeof (obj)) 

console.log(typeof (null))
console.log(typeof (undefined))

console.log("2"+2)
console.log(2+2)
console.log(2+"2")
console.log("2"+2+2)
console.log(2+2+"2")

// ternarry operator
let marks = 55;
let result = marks>=33? "pass" : "fail";
console.log(result)
if (num > 0) {
    console("+ve num");
}
else if (num < 0) {
    console.log("-ve");
} else {

    console.log("num is 0");
}


