// Function to find largest among 2 numbers.
function largest(num1,num2){
    if(num1>num2){
        console.log(`${num1} is greater than ${num2}`)
    }else if(num2>num1){
        console.log(`${num2} is greater than ${num1}`)
    }else{
        console.log("both are equal")
    }
}
largest(55,88)

// Function to check if a number is positive, negative, or zero.
function checkNumber(num){
    if(num>0){
        console.log(`${num} is positive`)
    }else if(num<0){
        console.log(`${num} is negative`)
    }else{
        console.log(`${num} is zero`)
    }
}
checkNumber(5)
checkNumber(-5)
checkNumber(0)

// Function to check if a number is positive, negative, or zero (using return).
function checkNumber(num) {

    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }

}

console.log(checkNumber(10));

// Function for factorial.
function factorial(num){
    let fact = 1;
    for(let i = 1;i<=num;i++){
        fact *= i;
    }
    return fact;
}   
console.log(factorial(5))

// Function to reverse a string.
function reverseString(str){
    let reversed = "";  
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello"));
