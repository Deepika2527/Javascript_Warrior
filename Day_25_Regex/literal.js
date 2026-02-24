let str = "Hello all, welcome All, all , to the world of Programming lanaguage. Bye All.."

console.log(str);


// match
// g-global , i caseinsenstive
// console.log(str.match(/all/));
// console.log(str.match(/all/g));
// console.log(str.match(/all/gi));
// console.log(str.match(/bye/));
// console.log(str.match(/ /g));

//search -

// console.log("Using search Method");

// console.log(str.search(/all/));
// console.log(str.search(/all/g));
// console.log(str.search(/all/i));
// console.log(str.search(/test/));



//test

// console.log(/all/.test(str))
// console.log(/all/i.test(str));
// console.log(/data/.test(str));


let str2 = 'js js'
console.log(/js js/.test(str2));
// console.log(/js js/g.test('js'));
// console.log(/js js/g.test('js'));


let st3 = 'js js js js'
let ptrn = /js/g;
console.log(ptrn.test(st3));
console.log(ptrn.test(st3));
console.log(ptrn.test(st3));
console.log(ptrn.test(st3));
console.log(ptrn.test(st3));
console.log(ptrn.test(st3));
console.log(ptrn.test(st3));
console.log(ptrn.test(st3));
console.log(ptrn.test(st3));


// constructor
console.log("Constructor");

let regx = new RegExp('js','g')
let st1 = "hello js. js is very easy to learn.Js is Dynamic."

console.log(st1.match(regx));
console.log(st1.search(regx));
console.log(regx.test(st1));





















