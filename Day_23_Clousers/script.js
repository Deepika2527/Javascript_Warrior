// function test(){
//     {
//         var a = 10
//         let b= 20
//         const c= 30
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
    
    
    
// }
// test()






// var a = 10
// console.log(a);


// {
//     console.log(a);
//     var a = 13
//     console.log(a);
    
// }


// console.log(a);


// for(var i=10;i<=15;i++){
//     console.log(i);
    
// }

// let j =12
// console.log(j);
// {
//     // console.log(j); 
//       let j= 14
//     console.log(j);
    
    
// }
// console.log(j);


// for(let j= 10; j<=13; j++)
// {
//     console.log(j);
    
// }

//example1

// function js(){
//     let name = 'JavaScript'
//     // console.log(`Hello.. ${name}`);
//      function react(){
//            console.log(name);
//     }
//     react()
   

// }
// js()

// example 2
// function Outer(name){

//     return function(){
//         console.log(`Hello Anu..Welcome to ${name} classes.`);
        
//     }

// }

// res =  Outer('Python')
// // console.log(res);
// res()


// for(var i=0;i<5;i++)
// {
//     setTimeout(()=>{
//         console.log(i);
        
//     },1000)
// }


// for(let i=0;i<5;i++)
// {
//     setTimeout(()=>{
//         console.log(i);
        
//     },1000)
// }




//selfInvoking

let name = 'anu'
console.log(name);


(function(){
   let name = 'Anu'
   console.log(name);
   
})();