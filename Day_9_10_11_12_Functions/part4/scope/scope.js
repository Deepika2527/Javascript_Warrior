let a = 10;
{
    console.log("Global");

    console.log(a);

    console.log("Local-inside");
    let a1 = 20;
    console.log(a1);


}

console.log("Local-oustide");
// console.log(a1);



var b = 20;
{
    console.log('Global');

    console.log(b);

    console.log('Local-inside');
    var b1 = 30;
    console.log(b1);

}

console.log('Local-inside');
console.log(b1);


const c = 30;
{
    console.log("Global");
    
    console.log(c);
    console.log("Inside-Local");
    let c1 = 40;
    console.log(c1);
    

}
console.log("Local-Outside");
console.log(c1);




let data = 'Js';
var data1 = "React";
const data2 = "Python"
function grt() {
    console.log(data);
    console.log(data1);
    console.log(data2);



}
grt()