function validateForm() {
    let valid = true;

    let name = document.getElementById("name").value;
    if (name == "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    let email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    let console = document.querySelector('input[name="console"]:checked');
    if (console == null) {
        document.getElementById("consoleError").textContent = "Please select a console";
        valid = false;
    } else {
        document.getElementById("consoleError").textContent = "";
    }

    let topics = document.querySelectorAll('input[name="topics"]:checked');
    if (topics.length == 0) {
        document.getElementById("topicsError").textContent = "Please select a topic";
        valid = false;
    } else {
        document.getElementById("topicsError").textContent = "";
    }

    let message = document.getElementById("message").value;
    if (message == "") {
        document.getElementById("messageError").textContent = "Message is required";
        valid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    return valid;
}