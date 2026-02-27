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


    //now checking the condition useing if else
    if (username === "" || email === "" || pswd === "" || phoneno === "") {
        error.textContent = "Please enter all the fields"
        return
    }
    
   success.textContent = "Form submitted"





})



