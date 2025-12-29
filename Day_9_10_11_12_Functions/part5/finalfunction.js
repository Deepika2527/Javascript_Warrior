function add(){
    console.log(2+0);
    
}
add();

//using arrow functions

var addition = ()=>{
    console.log("Hello");
    
}
addition()

//arrows function with parameters



var sub =(a,b) =>{
    console.log(b-a);
    
}
sub(10,20)

//arrow functions with return kewyword
var mul = (x,y)=>{
    return x*y
}
// mul(2,3)
console.log(mul(2,3));


//arrow function with single parameter

// var greet = name =>{
//     console.log(name);
// }
// greet("Hello students..!!")


// var grt = _ =>{
//     console.log("Using _ ");
//     console.log(_);
    
// }
// grt("Hello All..!!")


//arrow function without explict return


// var addt = (a,b)=>
//      a*b 
// // console.log(addt(5,8));
// let rest =addt(5,8);
// console.log(rest);


//arrow functions with object
// const greetname = () => {name:"Anu"};
// console.log(greetname());

const greetname = () => ({name:"Anu"});
console.log(greetname().name);





