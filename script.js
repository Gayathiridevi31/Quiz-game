const quizQuestions = [
    {
        question: "Which of the following is used to declare a variable in JavaScript?",
        options: ["let","const","var","All of the above"],
        correctAnswer: 3 
    },
    {
        question: "Which method is used to add elements to an array in JavaScript?",
        options: ["add()","push()","insert()","append()"],
        correctAnswer: 1 
    },
    {
        question: "Which symbol is used for strict equality comparison in JavaScript?",
        options: ["==","=","===","!=="],
        correctAnswer: 2 
    },
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        options: ["string", "number", "boolean", "object"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is NOT a valid JavaScript variable name?",
        options: ["let myVar","var 1stVar","const _myVar"," let my_Var"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is the correct way to declare a JavaScript variable?",
        options: ["var 1name;","let name;","name = var;","const let name;"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is used to print a message to the console in JavaScript?",
        options: ["console.print()","console.log()","log.console()","print.console()"],
        correctAnswer: 1
    },
    {
    question: "Which method is used to remove the last element from an array in JavaScript?",
    options: ["pop()","shift()","push()","unshift()"],
    correctAnswer: 0
   },
   {
    question: "What does the alert() method do in JavaScript?",
    options: ["Displays a pop-up box with a message","Logs a message to the console.","Changes the background color of the page.","Makes the page reload."],
    correctAnswer: 0
   },
   {
    question: "What is the result of typeof null in JavaScript?",
    options: ["object","null","undefined","NaN"],
    correctAnswer: 0
   }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function startQuiz() {
    document.getElementById("intro").style.display = 'none';
    document.getElementById("quiz").style.display = 'block';
    document.getElementById("nextButton").style.display = 'inline-block';
    displayQuiz();
}

function displayQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = ''; 

    const questionObj = quizQuestions[currentQuestionIndex];
    const questionElem = document.createElement("div");
    questionElem.innerHTML = `<p>${questionObj.question}</p>`;

    questionObj.options.forEach((option, index) => {
        const optionElem = document.createElement("div");
        optionElem.innerHTML = `
            <label>
                <input type="radio" name="question${currentQuestionIndex}" value="${index}">
                ${option}
            </label>
        `;
        questionElem.appendChild(optionElem);
    });

    quizContainer.appendChild(questionElem);
}

function checkAnswer() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);
        userAnswers[currentQuestionIndex] = answerIndex;
    } else {
        userAnswers[currentQuestionIndex] = null; 
    }
}

function nextQuestion() {
    checkAnswer(); 
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuiz();
    } else {
        document.getElementById("nextButton").style.display = 'none';
        document.getElementById("submitButton").style.display = 'inline-block'; 
    }
}

function submitQuiz() {
    checkAnswer(); 

    score = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
        if (userAnswers[i] === quizQuestions[i].correctAnswer) {
            score++;
        }
    }

    const resultElem = document.getElementById("result");
    resultElem.innerHTML = `You scored ${score} out of ${quizQuestions.length}.`;
    resultElem.style.display = 'block'; 
    document.getElementById("submitButton").style.display = 'none'; 
}


