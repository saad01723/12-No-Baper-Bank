document.getElementById("submit-btn").addEventListener('click',function(){

    const emailField = document.getElementById("user-name")
    const email = emailField.value;

    const passField = document.getElementById("password")
    const pass = passField.value 


    if (email === 'saad@gmail.com' && pass === "saad123") {
        window.location.href = "new.html "
    }
    else{
        alert("Wrong Password Vaiya ... ")
    }

} )