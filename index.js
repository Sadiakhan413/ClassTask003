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
    {
		question: "What is the capital Of Pakistan?",
		answers: ["Islamabad", "London", "Peshawar", "Rome"],
		correct: 0
	},
    {
		question: "Who is the founder Of Pakistan?",
		answers: ["iqbal", "Quid e Azam", "Nawaz Sharif", "Fatima Jinnah"],
		correct: 1
	},
    {
		question: "Eiffel Tower is in?",
		answers: ["peris", "pakistan", "india", "US"],
		correct: 0
	},
	// Add more questions here...
];
var currentQuestion = 0;
var score = 0;

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

function nextQuestion() {

}

