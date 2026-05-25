// map
let arr = [1,2,3,4,5];
let squaredArr = arr.map(function(num){
    return num * num;
})  
console.log(squaredArr)



// filter
let arr = [10,25,40,55]
let filterArr = arr.filter(function(num){
    return num>30;
})
console.log(filterArr)



// find
let arr = [
 {id:1,name:"Ayush"},
 {id:2,name:"Rahul"}
]

let findArr = arr.find((n)=>{
    return n.name === "Rahul"
});
console.log(findArr);



// reduce
let arr = [10,20,30];

let reduceArr = arr.reduce((n,m)=>{
    return n + m;
},0);
console.log(reduceArr);




// sort
let arr = [5,2,9,1];
let sortArr = arr.sort((n,m)=> n-m);
console.log(sortArr);

