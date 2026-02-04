// localStorage.clear();


//let name = 'anu'  --> name : 'anu'

localStorage.setItem('name', 'Anu');

localStorage.setItem('course', 'ReactJs');
localStorage.setItem('gender','Fm');
//if the keys are same the data will be updated
localStorage.setItem('name', 'AnuRadha');



//getItem-
let name = localStorage.getItem('name');
console.log(name);
console.log(typeof(name));


//removeItemove
localStorage.removeItem('gender');

// localStorage.clear()



//working with arrays

let course =  ['Html','Css','Bstrap','Js'];
console.log(course);


//setting the array to the localstorage


localStorage.setItem('courses',course);


// let data = localStorage.getItem('courses');
// console.log(data);
// console.log(typeof data);
// console.log(data[1]);




// localStorage.setItem('courses',JSON.stringify('course'));

// let data = // localStorage.clear();


//let name = 'anu'  --> name : 'anu'

// localStorage.setItem('name', 'Anu');

// localStorage.setItem('course', 'ReactJs');
// localStorage.setItem('gender','Fm');
// //if the keys are same the data will be updated
// localStorage.setItem('name', 'AnuRadha');



//getItem-
// let name = localStorage.getItem('name');
// console.log(name);
// console.log(typeof(name));


//removeItemove
// localStorage.removeItem('gender');

// localStorage.clear()



//working with arrays

let courses =  ['Html','Css','Bstrap','Js'];
console.log(course);


//setting the array to the localstorage


localStorage.setItem('courses',courses);


// let data = localStorage.getItem('courses');
// console.log(data);
// console.log(typeof data);



localStorage.setItem('courses',JSON.stringify(courses));

let data = localStorage.getItem("courses");
console.log(data);
console.log(typeof data);
console.log(data[1]);

let finalDta =  JSON.parse(localStorage.getItem("courses"));
console.log(finalDta);
console.log(finalDta[0]);
console.log(typeof finalDta);
finalDta.push("React")
console.log(finalDta);



// //sesiion storage
// sessionStorage.setItem('name','React');














// console.log(data);
// console.log(typeof data);




