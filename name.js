// Get a reference to the form
const form = document.getElementById('myForm');

// Add a listener for the form's submit event
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get the value of the first input element
    const input = document.getElementsByClassName('input')[0].value;

    // Check the input value
    if (input === "Deema Tamer" || input === "Loai Tamer") {
        window.location.href = "verify.html";
    } else {
        console.warn("Invalid name. Access denied.");
    }
});
