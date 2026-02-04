


// selecting

let gp = document.getElementById('gp');
let p = document.getElementById('pr');
let ch = document.getElementById('ch');
let gch = document.getElementById('gch');

// console.log(gch);



gp.addEventListener('click',()=>{
    alert('GrandParent is clicked')
},);
p.addEventListener('click',()=>{
    alert('parent is clicked');
},true)
p.addEventListener('click',(e)=>{
    alert('parent is clicked-Fist trigger');
    e.stopPropagation();
    // e.stopImmediatePropagation();
},true);
p.addEventListener('click',()=>{
    alert('parent is clicked-SecondTrigger');
},true)
ch.addEventListener('click',()=>{
    alert('Child is clicked')
},)
gch.addEventListener('click',()=>{
    alert('GrandChild')
},)





