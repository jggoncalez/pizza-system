const modal = document.getElementById("login-modal");

// MODAL

function loginModal(){
    modal.style.display = "flex";
}

function closeModal(){
    modal.style.display = "none";
}

// LOG-IN

function login() {
    var userName = document.getElementById("username").value;
    var password = document.getElementById("pass").value;

    if (userName === "adm" && password === "1234") {
            window.location.href = "admsystem.html"
    } else {
        document.getElementById("ans").innerHTML = "Username or password is incorrect! <br> Please, try again!"
    }
}