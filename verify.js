const correctAnswer1 = "bd.d";
const correctAnswer2 = "bd.l";
const correctAnswer3 = "bd.mc";

let userAnswer = prompt("Please enter provided password");

if (userAnswer === correctAnswer1) {
  alert("Correct, Click Ok To Proceed");
  window.location.href = "deema.html";
} else if (userAnswer === correctAnswer2) {
  alert("Correct, Click Ok To Proceed");
  window.location.href = "loai.html";
} 
else if (userAnswer === correctAnswer3) {
  alert("Correct, Click Ok To Proceed");
  window.location.href = "mostafa(c).html";
}
else {
  alert("Incorrect, Click Ok To Proceed");
  window.location.href = "index.html";
} 
