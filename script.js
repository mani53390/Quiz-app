const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionArea = document.getElementById('question-area');
const choiceButtons = document.querySelectorAll('.choice');
const scoreDisplay = document.getElementById('score');
const nextButton = document.getElementById('next-question');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionArea.textContent = currentQuestion.question;
    choiceButtons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
    });
}

function checkAnswer(event) {
    const selectedChoice = event.target;
    const selectedAnswer = parseInt(selectedChoice.dataset.number);
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (selectedAnswer === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert("Try Again!");
    }

    scoreDisplay.textContent = `Score: ${score}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz Over! Your score is ${score}`);
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }
}

choiceButtons.forEach(button => {
    button.addEventListener('click', checkAnswer);
});

nextButton.addEventListener('click', nextQuestion);

loadQuestion();


document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '1' && key <= '4') {
        const selectedAnswer = parseInt(key);
        const correctAnswer = questions[currentQuestionIndex].correct;

        if (selectedAnswer === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Try Again!");
        }

        scoreDisplay.textContent = `Score: ${score}`;
    }
});
