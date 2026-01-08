// let arr = [1,2,3,4,5,6];
// console.log(arr);

// console.log(arr.length);



// let ar = [1,true,false,"true", [2,34], {name:'Anu', class:'js'},890.9]

// console.log(ar);
// //access value
// console.log(ar[4][0]);
// console.log(ar[5]);
// console.log(ar[5].name);



//ways 2
// let students = new Array("hello",89,true,90);
// console.log(students);


// let studs = new Array(4);
// console.log(studs);
// studs[0] = "Std1";
// console.log(studs);
// studs[1] = "Std2";
// console.log(studs);
// studs[2] = "Std3";
// console.log(studs);
// studs[3] = "Std1";
// console.log(studs);

//updating
// console.log(ar);
// ar[1] = "True";
// console.log(ar);




// //delete
// console.log(delete ar[2])
// console.log(ar);


//methods
// let fruits = ["Apple","Banana","Grapes","Kiwi","Mango","Chiku","CustardApple"];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.pop());
// console.log(fruits.pop("CustardApple","Chiku"));
// console.log(fruits);


//push
// let cart = []
// console.log("Push");
// console.log(cart.push("Washingmachine"));
// console.log(cart);
// console.log(cart.push("Mobile"));
// console.log(cart);
// console.log(cart.push("Handbag","Camera"));
// console.log(cart);

//unshift and shift
// console.log("Unshift");
// let courses = ["Html","Css","Bstrap","Js","React"];
// console.log(courses);
// console.log(courses.unshift("Python"));
// console.log(courses);

//shift
// console.log("Shift");
// console.log(courses.shift());
// console.log(courses);

//includes
// console.log("Includes");
// console.log(courses.includes("Html"));
// console.log(courses.includes("html"));
// console.log(courses.includes("-1"));

//sort
// let no = [10,5,2,1,100,34,89,20,34];
// console.log(no.sort());

// let num = [10,2,5,1];
// num.sort((a,b)=> b-a);
// console.log(num);
// console.log(num.reverse());


//fill

// let nos = [1,2,3,4,5,6,7,8,9,10];
// nos.fill(0);
// console.log(nos);
// nos.fill(0,2,6);
// console.log(nos);


//join
let data = [1,3,4,5,6,6];
console.log(data.join("   "));

//slice and splice
let numb =  [1,2,3,4,5,6,7,8,9,10];
console.log(numb);
console.log("****");


console.log(numb.splice(1,1,20));
console.log(numb);



// console.log(numb.slice(2,6));
// console.log(numb.splice(2,7));
// console.log("****");

// console.log(numb.slice(5));
// console.log(numb.slice(-2));




//splice


let fruits = ["Apple","Banana","Grapes","Kiwi","Mango","Chiku","CustardApple"];

console.log(fruits);
console.log(fruits.splice(3,0,"grapes","strawberry"));
console.log(fruits);




































