function login() {
    var userName = document.getElementById("username").value;
    var password = document.getElementById("pass").value;

    if (userName === "adm" && password === "1234") {
        auth = true;
        setTimeout(() => {
            window.location.href = "admsystem.html";
        }, 1000);
    } else {
        document.getElementById("ans").innerHTML = "Username or password is incorrect! <br> Please, try again!"
    }
}