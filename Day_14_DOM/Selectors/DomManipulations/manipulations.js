// let div = document.createElement('div');
// console.log(div);

// div.innerText = 'This is Division'


// document.body.appendChild(div);


// div.setAttribute('id','division')
// div.style.border = '2px solid orange';
// div.style.width =  '200px';
// div.style.height = '200px';
// div.style.borderRadius = '50%'



//example

let btn = document.createElement('button');
console.log(btn);
btn.innerText = 'Click Me'


document.body.appendChild(btn)


btn.addEventListener('click',()=>{
let div = document.createElement('div');
console.log(div);

div.innerText = 'This is Division'


document.body.appendChild(div);


div.setAttribute('id','division')
div.style.border = '2px solid orange';
div.style.width =  '200px';
div.style.height = '200px';
})



