const validNames = ["deema tamer", "loai tamer"];
const error = document.querySelector('.error'); // Selects first element with the class

// Get a reference to the form
const form = document.getElementById('myForm');

// Add a listener for the form's submit event
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const input = document.getElementsByClassName('input')[0].value.toLowerCase();

  if (validNames.includes(input)) {
    window.location.href = "verify.html";
  } else {
    console.warn("Invalid name. Access denied.");
    error.style.display = "block";
  }
});
