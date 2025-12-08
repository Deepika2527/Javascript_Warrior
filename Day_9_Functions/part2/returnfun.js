// function disp(){
//     console.log("Hey im from return function");
//     return "hello";
    
// }
// disp();
// console.log(disp());
// let ans = disp();
// console.log(ans);
// console.log(typeof(ans));

//example-2
function add(){
    return 5+10;
}
let answer = add();
console.log(answer);
console.log(answer *10);
console.log(answer *100);

//example-3

function display(){
    console.log("Hey Im above the return");
    return "Im from return";
    console.log("Hey Im after return");
    
    
}
console.log(display());


//example
function greet(name,sub){
    return `My name is ${name}, and im learning ${sub}`
}
console.log(greet('Anuradha','Js'));


function grt(name='Anuradha',subj="Js"){
    return `my name is ${name} and im learning ${subj}`
}
console.log(grt());
let displayM = grt();
console.log(displayM);


//example 4
// let age= 20;
function vote(age =10){
    if(age>=20){
        return 'Eligible';
        console.log("Are you goint to print");
        
    }
    return 'Not Eligible'
}
console.log(vote());


function nme(){
    return 5-2
}
console.log(nme());



// function x(){
//     return 
//     10;
// }
// console.log(x());
// console.log(typeof(x()));




function test(){
return{
    name: "Deepika",
    age :25
}
}
console.log(test().name);


// function getData(){
//     return
//     {
//         name1: 'Anu'
//     }
// }
// console.log(getData().name1);














