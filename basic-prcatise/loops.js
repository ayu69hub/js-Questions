// 1-10
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// even no 1 to 50
for(let i = 1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}

// table pf 7
for(let i=1;i<=10;i++){
    console.log(`7 * ${i} = ${7*i}`)
}

//Find sum of numbers from 1–100.

let sum = 0;
for(let i =1;i<=100;i++){
    sum += i;
    
}
console.log(sum)

// find factorial of a number
let num = 5;
let factorial = 1;
for(let i = 1;i<=num;i++){
    factorial *= i;
}
console.log(factorial)

// Reverse a number
let originalNumber = 12345;
let reversedNumber = 0;
while(originalNumber > 0){
    reversedNumber = reversedNumber * 10 + originalNumber % 10;
    originalNumber = Math.floor(originalNumber / 10);
}
console.log(reversedNumber);