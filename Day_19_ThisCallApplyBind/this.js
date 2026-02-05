// globally
console.log(this);
//node Js- {} - empty object

//function
// function greet(){
//     console.log(this);
    
// }

// greet();

//methodObject

// let person = {
//     name: 'Anu',
//     course : 'Js',
//     data : function(){
//         console.log(`Hello ${this.name} and Welcome to the ${this.course} Course.`);
        
//     }
// }
// person.data();


//this keyword with arrow fuction
let prson = {

    name: 'Anu',
    course : 'Js',
    data : ()=>{
        console.log(`Hello ${this.name} and Welcome to the ${this.course} Course.`);
        
    }

}
prson.data();

//eventListeners


// let btn  =  document.getElementById('btn');

document.getElementById('btn').addEventListener('click', function(){
    console.log(this);
    
    }
    
)




