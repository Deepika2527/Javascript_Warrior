try{
    let num =10;
    console.log(num.toUpperCase());
    
}
catch(error){
    console.log("Something went wrong...");
    
    console.log(error);
    console.log(error.message);
    
    
}



try{
    console.log("Hello Anu");
    
}
catch(err){
    console.log("error happended");
    console.log(err);
    
    
}
finally{
    console.log("Class ended..!!");
    
}

//throw
let age= 15;
try{
    if(age<18){
        throw "You are not eligible!"
        
    }
    console.log("You can vote");
    
}
catch(er){
    console.log("Error:", er);    

}