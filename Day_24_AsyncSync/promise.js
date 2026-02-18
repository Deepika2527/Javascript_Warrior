function task1(){
    console.log("Products order/Food is orderd...T1");
    
}

// task1()

// function task2(){
//    setTimeout(()=>{
//     console.log('Payment done');
    
//    },3000)
// }


// task2()


function task3(){
    console.log('Recived  the order....T3');
    
}
// task3()


let p4 = new Promise((resolve,reject)=>{
    task1()
    setTimeout(()=>{
        console.log('Payment done-T2');
         resolve()
        
        
    },3000)
   
    
    }).then(()=>{
    task3()
})
console.log(p4);
// task3()



// let p = new Promise((resolve,reject)=>{
//     resolve('hello')
//     // reject('Sorry')
// })
// console.log(p);






//example 2
// let p1 = new Promise((res,rej)=>{
//     isLogged = true
//     if(isLogged){
//         res('True-Success')
        
//     }
//     else{
//         rej("False-Sorryy")
//     }
// })
// .then((mes)=>{
//     console.log(mes);
//     return "Happy"
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })
// .finally(()=>{
//     console.log('Im executed');
    
// })

// console.log(p1);


//example 3


// let p2 = new Promise((resolve, reject) => {
//    let no =10
//    resolve(no)
    
// }).then((no)=>{
//     console.log('First No', no);
//     return no * no
    
// }).then((no)=>{
//     console.log("Adding", no);
//     return no + no
 
    
// }).then((no)=>{
//     console.log('FinalNum', no);
//     return 'Finaldata'
    
// }).then((mes)=>{
//     console.log(mes);
    
// })
 



// console.log(p2);






    