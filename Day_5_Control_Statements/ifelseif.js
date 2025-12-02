let age = 100;

if(age<3){
    console.log("Baby");
    
}
else if(age < 13){
    console.log("Child");
    
}
else if(age <20){
    console.log("Teenager");
    
}
else{
    console.log("Adult");
    
}

//ex2
let user = "Admin";

if(user === "superadmin"){
    console.log("Full acess");
    
}
else if(user === "admin"){
    console.log("Admin acsess");
    
}
else if(user==="manger"){
    console.log("Manger access");
    
}
else{
    console.log("No acess");
    
}


//ex 3
let product ={
    name: "Laptop",
    stock:0
}

if(product.stock>10){
    console.log("In stock");
    
}
else if(product.stock>0){
    console.log("Limited stock");
    
}
else{
    console.log("Out of stock");
    
}