function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const feedback = document.getElementById("feedback");

  if (!selectedOption) {
    feedback.textContent = "Please select an answer.";
    return;
  }

  if (selectedOption.value === "4") {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

document
  .getElementById("submit-answer")
  .addEventListener("click", checkAnswer);
