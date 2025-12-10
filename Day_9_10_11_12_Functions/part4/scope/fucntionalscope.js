
function test() {

    var a = 20;
    let b = 30;
    const c = 40;
    console.log(a);

    console.log(b);

    console.log(c);

    {
        var a= 200;
        let b= 300;
        const c =400;
        console.log("Inside block-Inside the function");
        
        console.log(a);

         console.log(b);

        console.log(c);
    }
    console.log("Outside the block-Inside the Function");
    console.log(a); 

    console.log(b);

    console.log(c);
    


}


test();
console.log("oustside of the function a,b,c");
console.log(a);

// console.log(a);
// console.log(b);
// console.log(c);