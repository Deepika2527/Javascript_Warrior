// function one(){
//     console.log("Im from-one");
    
// }
// function two(){
//     console.log('Im from -two');
    
// }

// one();
// two();




// function one(callback){
//     console.log("Im from-one");
//     callback();
    
// }
// function two(){
//     console.log('Im from -two');
    
// }

// one(two);



//ex-2

function add(callback,a,b){
    console.log("Im going to add");
    callback(a,b)
    
}
function result(x,y){
    console.log(x+y);
    console.log("Hey, im from the result function..");
    
    
}
add(result,10,20);


//ex-3
function login(callback){
    console.log("logging in......");

    setTimeout(function(){
        console.log("Login successfully..!!");
        callback();
        
    },2000)
    
}
function gotoDashbrd(){
    console.log("Redirecting to the dashboard");
    
}
login(gotoDashbrd)
