const correctAnswer1 = "bd.d";
const correctAnswer2 = "bd.l";

let userAnswer = prompt("Please enter provided password");

if (userAnswer === correctAnswer1) {
  alert("Correct, Click Ok To Proceed");
  window.location.href = "deema.html";
} else if (userAnswer === correctAnswer2) {
  alert("Correct, Click Ok To Proceed");
  window.location.href = "loai.html";
} else {
  alert("Incorrect, Click Ok To Proceed");
  window.location.href = "index.html";
}
