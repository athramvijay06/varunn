
document.getElementById("registrationForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let event = document.getElementById("event").value;
    let date = document.getElementById("date").value;

    let valid = true;

    document.querySelectorAll("small").forEach(function(error) {
        error.innerHTML = "";
    });

    document.getElementById("successMessage").innerHTML = "";

    if (!/^[A-Za-z ]{3,}$/.test(name)) {
        document.getElementById("nameError").innerHTML =
        "Enter a valid name";
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerHTML =
        "Enter a valid email";
        valid = false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML =
        "Enter 10 digit phone number";
        valid = false;
    }

    if (event == "") {
        document.getElementById("eventError").innerHTML =
        "Select an event";
        valid = false;
    }

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!date || new Date(date + "T00:00:00") < today) {
        document.getElementById("dateError").innerHTML =
        "Select a valid date";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMessage").innerHTML =
        "Registration Successful! Thank You " + name;

        document.getElementById("registrationForm").reset();
    }
});
