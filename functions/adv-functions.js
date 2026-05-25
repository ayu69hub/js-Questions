// Prime Number Checker
function primeNum(num) {

    if (num <= 1) {
        console.log("Not Prime");
        return;
    }

    let isPrime = true;

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }

    }

    if (isPrime) {
        console.log("Prime Number");
    } else {
        console.log("Not Prime Number");
    }

}

primeNum(11);

// OTP Generator
function generateOTP(length) {
    const digits = "0123456789";
    let otp = "";

    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
}
console.log(generateOTP(6)); // Example usage: generates a 6-digit OTP




// remove duplicates from array

function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


// Example usage: removes duplicates from the array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4]));

