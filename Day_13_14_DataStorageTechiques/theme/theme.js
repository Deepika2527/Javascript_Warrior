document.addEventListener('DOMContentLoaded',()=>{
    let btn = document.getElementById('btn');
    let body = document.body;

//   localStorage.clear();
//save the theme
let savedTheme = localStorage.getItem('theme')
console.log(savedTheme);


//apply the initialtHEME

if(savedTheme){
    body.classList.add(savedTheme)
}
else{
    body.classList.add('dark');
    localStorage.setItem('theme','dark')
}


btn.addEventListener('click',()=>{
    if(body.classList.contains('dark')){
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme','light')

    }
    else{
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme','dark')
    }
})



})