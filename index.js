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
		question: " HTML stands For ?",
		answers: ["Hen Tiger Mosquito Lion ", "High Tech Markup Lang", "Hpyer Text More Language", "Hyper Text Markup Language"],
		correct: 3
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
	{
		question: " 1 + (8*4)/2 -5 ?",
		answers: ["16", "12", "45", "67"],
		correct: 1
	},
];
var currentQuestion = 0;
var score = 0;
function displayQuestion() {
document.getElementById("question").innerHTML = questions[currentQuestion].question;
document.getElementById("answer-1").innerHTML = questions[currentQuestion].answers[0];
document.getElementById("answer-2").innerHTML = questions[currentQuestion].answers[1];
document.getElementById("answer-3").innerHTML = questions[currentQuestion].answers[2];
document.getElementById("answer-4").innerHTML = questions[currentQuestion].answers[3];
}
function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correct) {
        alert("Correct answer!");
        score++; 
		document.getElementById("score").innerHTML = "Score: " + score;
    } else {
        alert("Incorrect answer. Try again.");
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        alert("Quiz completed! Your score: " + score);
    }
}
displayQuestion();
