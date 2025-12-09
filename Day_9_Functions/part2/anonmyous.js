// function(){

// }


// setTimeout(function(){
//    console.log("Hello all");
   
// },5000);


// function greetng(){
//     console.log("Welcome!");
    
// }
// greetng()
// setTimeout(greetng,7000);


console.log("Start");
setTimeout(function(){
    console.log("This will run");
    
},2000)
console.log("End");


//


setTimeout(function(){
    document.getElementById("para").style.display = "none";
},4000);


setTimeout(function(){
    document.getElementById("mgs").innerText =" Hello Anuradha"
},8000)



//

let greetings= setTimeout(function(name){
    console.log(`Hello ${name}`);
    
},3000,'Students')
clearTimeout(greetings)





