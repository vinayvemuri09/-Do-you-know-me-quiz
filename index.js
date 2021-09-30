var readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;

console.log(chalk.green("Welcome to <--Do you know Vinay--> quiz"));

var userName = readlineSync.question(chalk.red("What is your Name ? "));
console.log(chalk.blue("Welcome " + userName, ", your quiz will be here: "));


// high score
var highScore = [
  {
    name: "PK",
    score: 5,
  },

  {
    name: "AK",
    score: 4,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Hyderabad"
}, {
  question: "My favorite movie? ",
  answer: "Anand"
},{
  question: "What is my favourite sport? ",
  answer: "cricket"
},
{
  question: "What is my age (enter number) ",
  answer: "25"
},
{
  question: "What is my favorite Food? ",
  answer: "Biryani"
}];



// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.red(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log(chalk.green("right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.yellow("wrong!"));
    score=score;
   
  }

  console.log("current score: " + score);
  console.log("-------------")
}


for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)

  }


console.log(chalk.rgb(10, 75, 10)("you Scored :" + score));

console.log(chalk.keyword('orange')("Check out the high scores, if you should be there ping me and we will update it:"));

 for (var j=0; j<highScore.length; j=j+1)
{
    // var currentScore = highScores[j];
    console.log(highScore[j].name, ":" ,highScore[j].score);
    
}



