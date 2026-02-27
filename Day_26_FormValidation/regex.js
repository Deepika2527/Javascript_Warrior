document.getElementById("formValidate").addEventListener('submit', function (event) {

    event.preventDefault()

    //    getting the input field values

    let username = document.getElementById("name").value.trim()
    let email = document.getElementById("email").value.trim()
    let pswd = document.getElementById('pswd').value.trim()
    let phoneno = document.getElementById("phne").value.trim()

    console.log(username);
    console.log(email);

    console.log(pswd);

    console.log(phoneno);

    let success = document.getElementById("success")
    let error = document.getElementById("error")



    success.textContent = ""
    error.textContent = ""


      //using regex creating patterns
      let nameRegex = /^[a-zA-Z]{5,15}$/
      let emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
      let passwordRegex = /^[a-zA-Z0-9*%#@()_]{5,12}$/
      let phoneRegex = /^[6-9]\d{9}$/


      if(!nameRegex.test(username)){
        error.textContent = "Name must be Contains 5 to 15 charcters"
        return
      }
      if(!emailRegex.test(email)){
        error.textContent = "Enter a valid email"
        return
      }
      if(!passwordRegex.test(pswd)){
        error.textContent = "Passwrd shoul contains special symbols"
        return
      }
      if(!phoneRegex.test(phoneno)){
        error.textContent = "Enter 10 digits.."
        return
      }
      success.textContent = "Form submitted sucessfully.."


// store only name, email,phone
let userData ={
    username : username,
    email : email,
    phoneno :phoneno
}
localStorage.setItem("formData",JSON.stringify(userData))
    
})

window.addEventListener('load',function(){
    let savedData = JSON.parse(localStorage.getItem("formData"))
    if(savedData){
        document.getElementById("name").value = savedData.username
        document.getElementById("email").value = savedData.email

    }
})



// deepika@gmail.com

// userpart smallcaptilaletters