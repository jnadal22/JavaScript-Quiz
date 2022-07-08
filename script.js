// The variables are set to get the quiz started
let highScoresEl = document.querySelector("#high-scores");
let startBtnEl = document.querySelector("#start");
let questionsEl = document.querySelector("#question-container");
let playerInitials = document.getElementById("intials");
let TimerEl = document.querySelector("#Timer");
let secondsEl = document.querySelector("#seconds");
let introEl = document.querySelector("#intro-page");
let btn1El = document.querySelector("#btn1");
let btn2El = document.querySelector("#btn2");
let btn3El = document.querySelector("#btn3");
let btn4El = document.querySelector("#btn4");
let ansBtnEl = document.querySelector(".ans-btn");
// amount of time for the whole quiz

const userAnswer = "";
const highScores = {
  CorrectAnswer: 0,
  wrongAnswers: 0,
};
const myQuestions = [
  {
    question: "which one is a boolean?",
    answers: {
      a: "hi",
      b: "5.0",
      c: "true/false",
      d: "100,000",
    },
    correctAnswer: "c",
  },
  {
    question: "An Array holds variables with: ",
    answers: {
      a: "1 value",
      b: "3 values",
      c: "multiple values",
    },
    correctAnswer: "c",
  },
  {
    question: "JavaScript is and ___________ language ",
    answers: {
      a: "object-oriented",
      b: "object-based",
      c: "procedural",
      d: "none of the above",
    },
    correctAnswer: "a",
  },
  {
    question: "which is used to define a variable?",
    answers: {
      a: "var",
      b: "let",
      c: "a and b",
      d: "none of the above",
    },
    correctAnswer: "c",
  },
];

// console.log(quizTimer)

let countdownTimer = 40;

function startCountdown() {
  questionsEl.textContent = myQuestions[0].question;
  console.log(myQuestions[0]);
  introEl.style.display = "none";
  questionsEl.style.display = "block";

  const timerinterval = setInterval(function () {
    secondsEl.textContent = countdownTimer;
    countdownTimer--;
    console.log(countdownTimer);

    if (countdownTimer === 0) {
      clearInterval(timerinterval);
    }
  }, 1000);
}

startBtnEl.addEventListener("click", startCountdown);

ansBtnEl.addEventListener("click", selectedAnswer);

function selectedAnswer() {
  console.log("hello");
}
