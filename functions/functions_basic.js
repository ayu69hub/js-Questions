// greet

function greeet(){
    console.log("hii my name is Ayush")
}
greeet()


// greet with parameter
function greeet(name){
    console.log(`hii my name is ${name} `)
}
greeet("Ayush")



// add two nums
 function add2num(num1,num2){
    console.log(num1+num2)
 }
 add2num(2,3)

//  Function to check even or odd.

function evenodd(num){
    if(num%2===0){
        console.log(`urs num is even ${(num)}`)
    }else{
        console.log(`urs num is odd ${(num)}`);
        
    }

}
evenodd(55)

// Function to find square of a number.

function squnum(num){
    console.log(`the square of ur number is ${num*num}`)
}

squnum(4)

//  Function to find square of a number.(using return)

function square(num){
    return num*num;
}
ans = square(5);

console.log(ans+10);

