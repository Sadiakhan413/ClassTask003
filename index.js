const questions = [
	{
		question: "What is the capital of France?",
		answers: ["Paris", "London", "Berlin", "Rome"],
		correct: 0
	},
	{
		question: "What is the largest planet in our solar system?",
		answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
		correct: 2
	},
	// Add more questions here...
];

let currentQuestion = 0;
let score = 0;

document.getElementById("question").innerHTML = questions[currentQuestion].question;
document.getElementById("answer-1").innerHTML = questions[currentQuestion].answers[0];
document.getElementById("answer-2").innerHTML = questions[currentQuestion].answers[1];
document.getElementById("answer-3").innerHTML = questions[currentQuestion].answers[2];
document.getElementById("answer-4").innerHTML = questions[currentQuestion].answers[3];

document.getElementById("answer-1").addEventListener("click", checkAnswer);
document.getElementById("answer-2").addEventListener("click", checkAnswer);
document.getElementById("answer-3").addEventListener("click", checkAnswer);
document.getElementById("answer-4").addEventListener("click", checkAnswer);

document.getElementById("next-question").addEventListener("click", nextQuestion);

function checkAnswer(event) {
	const answer = event.target.innerHTML;
	if (questions[currentQuestion].answers[questions[currentQuestion].correct] === answer) {
		alert("Correct!");
		score++;
	} else {
		alert("Try Again!");
	}
	document.getElementById("score").innerHTML = `Score: ${score}`;
}

function nextQuestion() {
	currentQuestion++;
	if (currentQuestion >= questions.length) {
		alert(`Game Over! Your final score is ${score}.`);
		document.getElementById("question").innerHTML = "";
		document.getElementById("answer-1").innerHTML = "";
		document.getElementById("answer-2").innerHTML = "";
		document.getElementById("answer-3").innerHTML = "";
		document.getElementById("answer-4").innerHTML = "";
		score = 0;
		currentQuestion = 0;
	} else {
		document.getElementById("question").innerHTML = questions[currentQuestion].question;
		document.getElementById("answer-1").innerHTML = questions[currentQuestion].answers[0];
		document.getElementById("answer-2").innerHTML = questions[currentQuestion].answers[1];
		document.getElementById("answer-3").innerHTML = questions[currentQuestion].answers[2];
		document.getElementById("answer-4").innerHTML = questions[currentQuestion].answers[3];
	}
}

document.addEventListener("keydown", function(event) {
	if (event.key === "1") {
		document.getElementById("answer-1").click();
	} else if (event.key === "2") {
		document.getElementById("answer-2").click();
	} else if (event.key === "3") {
		document.getElementById("answer-3").click();
	} else if (event.key === "4") {
		document.getElementById("answer-4").click();
	}
});