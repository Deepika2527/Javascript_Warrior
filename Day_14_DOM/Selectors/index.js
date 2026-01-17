// document.body.style.backgroundColor = 'lightpink';



let head = document.getElementsByTagName('h1');
head[0].innerHTML = "Im the heading1"

//
document.getElementsByTagName("div")[0].style.backgroundColor = "lightpink";
document.getElementsByTagName("div")[1].style.backgroundColor = "lightpink";


//using loops
let divs = document.getElementsByTagName('div');
console.log(divs);

for(let i=0; i < divs.length;i++){
    divs[i].style.border = "2px solid green";
    divs[i].style.textDecoration ="underline";
    divs[i].style.fontSize = "32px";


}
// getElementById
console.log(document.getElementById("sect"));
document.getElementById('sect').style.border = "10px dashed orangered";
document.getElementById('sect').style.textAlign = "center"



//getElementsByclassName

console.log(document.getElementsByClassName("para"));
document.getElementsByClassName('para')[0].style.backgroundColor = "red";
document.getElementsByClassName('para')[0].style.color = "white";


//querySelector

console.log("query selector");
let data = document.querySelector('h4');
console.log(data);
data.style.backgroundColor ="lightgrey"
console.log(document.querySelector('#heading'));
console.log(document.querySelector(".para"));


//querySelectorAll
console.log("QuerySelectorAll");
console.log(document.querySelectorAll("h4,h6"));
document.querySelectorAll('h4')[1].style.fontSize = "40px"









