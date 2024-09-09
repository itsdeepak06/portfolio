document.getElementById('sendBtn').addEventListener('click', function() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const messageField = document.getElementById('message');

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const phone = phoneField.value.trim();
    const message = messageField.value.trim();
    
    let isValid = true;
    let errorMessage = "Please fill the following fields: ";

    // Check if fields are empty
    if (name === "") {
        isValid = false;
        errorMessage += "Name, ";
    }
    if (email === "") {
        isValid = false;
        errorMessage += "Email, ";
    }
    if (phone === "") {
        isValid = false;
        errorMessage += "Phone, ";
    }
    if (message === "") {
        isValid = false;
        errorMessage += "Message";
    }

    if (isValid) {
        // Show success message
        document.getElementById('popupMessage').innerText = "Thank you!";
        document.getElementById('tickMark').style.display = "block";

        // Clear the form fields after submission
        nameField.value = '';
        emailField.value = '';
        phoneField.value = '';
        messageField.value = '';
    } else {
        // Show error message
        document.getElementById('popupMessage').innerText = errorMessage.trim().replace(/,\s*$/, "");
        document.getElementById('tickMark').style.display = "none";
    }

    // Show popup
    document.getElementById('popup').style.display = 'block';
});

// Close popup on clicking the close button
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    var hamburger = document.querySelector(".hamburger");

    navLinks.classList.toggle("active"); // Toggles the nav links
    hamburger.classList.toggle("active"); // Toggles the cross effect on the hamburger icon
}

