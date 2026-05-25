// switch statement is used to perform different actions based on different conditions. It is an alternative to if-else statements when you have multiple conditions to check. The switch statement evaluates an expression and matches the expression's value to a case label, executing the associated block of code.
// find day
let day = "Wednesday";
switch(day){
    case "monday":
        console.log("Monday");
        break;
    case "tue":
        console.log("Tuesday");
        break;
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "thrusday":
        console.log("Thrusday");
        break;
    case "Friday":
        console.log("Friday");
        break;
    case "sat":
        console.log("saturay");
        break;
    default:
        console.log("Sunday")

}

// find the grade of a student based on marks
let marks = 85;
switch(true){
    case marks>=90 && marks<=100:
        console.log("Grade A");
        break;
    case marks>=80 && marks<90:
        console.log("Grade B");
        break;
    case marks>=70 && marks<80:
        console.log("Grade C");
        break;
    case marks>=60 && marks<70:
        console.log("Grade D");
        break;
    case marks>=0 && marks<60:
        console.log("Grade F");
        break;
}
// traffic light
let light = prompt("Enter the light");
switch(light){
    case "red":
        console.log("its red stop");
        break;
    case "yellow":
        console.log("its yellow wait");
        break;
    case "green":
        console.log("its green goo-oo");
        break;
    default:
        console.log("pls give right color light");
                
}

