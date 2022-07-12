// The variables are set to get the quiz started
let highScoresEl = document.querySelector("#high-scores");
let startBtnEl = document.querySelector("#start");
let questionsEl = document.querySelector("#question");
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
    correctAnswer: "true/false",
  },
  {
    question: "An Array holds variables with: ",
    answers: {
      a: "1 value",
      b: "3 values",
      c: "multiple values",
    },
    correctAnswer: "multiple values",
  },
  {
    question: "JavaScript is and ___________ language ",
    answers: {
      a: "object-oriented",
      b: "object-based",
      c: "procedural",
      d: "none of the above",
    },
    correctAnswer: "object-oriented",
  },
  {
    question: "which is used to define a variable?",
    answers: {
      a: "var",
      b: "let",
      c: "a and b",
      d: "none of the above",
    },
    correctAnswer: "a and b",
  },
];

// console.log(quizTimer)
var idx = 0;
let countdownTimer = 40;

function checkAns(evt){
evt.preventDefault()
if (evt.target.textContent === myQuestions[idx].correctAnswer){
  idx++
  displayQuestions()
}else{
  countdownTimer -= 10
  idx++
  displayQuestions()
}
}

function displayQuestions(){
  
  // for (var i = 0; i < 1; i++){
    questionsEl.textContent = myQuestions[idx].question;
    btn1El.textContent= myQuestions[idx].answers.a
    btn2El.textContent= myQuestions[idx].answers.b
    btn3El.textContent= myQuestions[idx].answers.c
    btn4El.textContent= myQuestions[idx].answers.d
    btn1El.addEventListener('click',checkAns)
    btn2El.addEventListener('click',checkAns)
    btn3El.addEventListener('click',checkAns)
    btn4El.addEventListener('click',checkAns)



  // }
}



function startCountdown() {
  displayQuestions()
  console.log(myQuestions[0]);
  introEl.style.display = "none";
  // questionsEl.style.display = "block";

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
