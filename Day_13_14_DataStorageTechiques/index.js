// Converstion

// let str =  "Hello all";
// console.log(str);
// console.log(typeof str);
// console.log(str.length);

// let name = "anuRadha";
// console.log(name);
// console.log(name.toUpperCase());




// let fn = prompt('Enter Your FirstNm:');
// let ln =  prompt('Enter your last name');

// let covertedName = fn.toUpperCase()


// console.log(fn + ln);
// console.log(covertedName);




// let data =  "Im oK wiTh MY evening ClaSs";
// console.log(data);
// console.log(data.toLowerCase());
// console.log(data);




// let email = prompt('Enter your email');
// console.log(email.toLowerCase());




// let inputNm = "Deepika";
// let  dbNm = "DEEPIKA";


// if(inputNm.toUpperCase() === dbNm)
// {
//     alert("Successfully LOgged In")
    
// }






//Searching  - includes, indexOf();


// let str1 = "Hello Js.Welcome to Js class @ 123Place";
// let n = "123"
// console.log(str1);
// console.log(str1.includes('all'));
// console.log(str1.includes('Hello'));
// console.log(str1.includes(' '));
// console.log(str1.includes(''));
// console.log(str1.includes('123'));
// console.log(n.includes('123'));
// console.log(str1.includes("js"));



// let str = "Hello js. js is very interesting.lets learn it online!!!!";
// console.log(str.length);

// console.log(str.indexOf('js'));
// console.log(str.lastIndexOf('js'));

// console.log(str.indexOf('JS'));
// console.log(str.lastIndexOf('JS'));

// console.log(str.indexOf(' '));
// console.log(str.lastIndexOf(' '));

// console.log(str.indexOf(' js'));

// console.log(true + true);


  

//  Extracting-

let str = "Good Evening, how was the session?";


console.log(str);
console.log(str.length);

console.log("******");
console.log(str.slice(2,6));  //2,5

console.log(str.substring(2,6));

console.log("With 0");
console.log(str.slice(0));
console.log(str.substring(0));

console.log(str.slice(6));
console.log(str.substring(6));

//diff1

console.log("Diff 1- swapping btwn slice and subString");
console.log(str.slice(6,2));

console.log(str.substring(6,2));

//diff2

// console.log("Diff 2- negative values");
// console.log(str.slice(-1));
// console.log(str.substring(-1));


// //

// console.log(str.slice(35));
// console.log(str.substring(35));

// //differnce
// console.log(str.slice(-5,-1));
// console.log(str.substring(-6,-2));

// console.log(str.slice(-1,-5));
// console.log(str.substring(-2,-6));
// console.log(str.substring(-2,6));
// console.log(str.substring(2,-6));




// let nm = "Deepika Vemuri";
// let firstName = nm.slice(0,7) ;
// console.log(firstName.toUpperCase());


// let email = "deepika@gmail.com";
// let uEmail = email.slice(0,email.indexOf('@'));
// console.log(uEmail);


// let message = "Your OTP is 7890";

// let otp= message.substring(12);
// console.log(otp);



// console.log(message);


let st1 = " HELLO   ";
let st2 = " GoodEvening";
let str1 = st1 +st2


console.log(st1+st2);
console.log(str1.trim());
console.log(st1.trimStart());
console.log(st1.trimEnd());


//chaining
let em = "      DeepIka@gmail.com      ";
console.log(em.trim().toLowerCase());




let fruits = "apple, mango, grapes, kiwi ,apple";
console.log(fruits);
console.log(fruits.split(", "));
console.log(fruits.split('e'));
console.log(fruits.split('o'));


let greeting = "Good evening Good Bye good Night";
console.log(greeting);
console.log(greeting.split(','));
console.log(greeting.split('o'))
console.log(greeting.split('o',3))
console.log(greeting.split(''));


//join
let course =  ['Jfs','Pfs','MernStack','Python'];
console.log(course.join('   '));



//codeAt
let nm = "Anu";  
console.log(nm.charAt(0).toUpperCase());
console.log(nm.charCodeAt(0));
































