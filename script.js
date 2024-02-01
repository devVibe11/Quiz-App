const questionlist=
[
    {
        Question:"which is the largest animal in the world",
        ans:[
            
               { text:"shark", correct:false },
               { text:"Blue whale", correct:true },
               { text:"Elephant", correct:false },
               { text:"Girrafe", correct:false}
            
        ]
    },
    {
        Question:"Who created Bitcoin?",
        ans:[
            
               { text:"Robert kiyosaki", correct:false },
               { text:"Satoshi nakamoto", correct:true },
               { text:"shawn parker", correct:false },
               { text:"My Dad", correct:false}
            
        ]
    },
    {
        Question:"When was India's independence day?",
        ans:[
            
               { text:"26 january", correct:false },
               { text:"15 august", correct:true },
               { text:"15 october", correct:false },
               { text:"26 august", correct:false}
            
        ]
    },
    {
        Question:"What is the most developed state in india?",
        ans:[
            
               { text:"Banglore", correct:false },
               { text:"kerala", correct:true },
               { text:"Mumbai", correct:false },
               { text:"Delhi", correct:false}
            
        ]
    }
]
const question=document.getElementById("question");
const answers=document.getElementById("answers");
const nxtbtn=document.getElementById("nxt-btn");
let btn=document.getElementsByClassName("btn");
let cqindex=0;
let score=0;

function startQuiz() {
    cqindex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questionlist[cqindex];
    let questionNo = cqindex + 1;
    question.innerHTML = questionNo + ". " + currentQuestion.Question;

    // Clear previous answer options
    answers.innerHTML = "";

    // Loop through each answer option and create buttons for them
    currentQuestion.ans.forEach(answer => {
        let btn = document.createElement("button");
        btn.innerHTML = answer.text;
        btn.classList.add("btn");
        btn.addEventListener("click", () => checkAnswer(answer.correct));
        answers.appendChild(btn);
    });
}

function checkAnswer(correct) {
    if (correct) {
        score++;
    }
    cqindex++;
    if (cqindex < questionlist.length) {
        showQuestion();
    } else {
        // Quiz ends, display score or any other action
        console.log("Quiz ended. Your score: " + score + "/" + questionlist.length);
    }
}

startQuiz();