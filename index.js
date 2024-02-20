var readlineSync = require("readline-sync");
let score = 0;
let userName = readlineSync.question("What`s your name? - ");
let kuler = require("kuler");
console.log(kuler(userName + " Welcome to the Quiz on Nodejs", "#059669\n"));
const database = {
  data: [
    {
      question: `let a = {}, let b = {}
      console.log(a == b)
      console.log(a === b)`,
      options: {
        A: "false false",
        B: "true false",
        C: "false true",
        D: "true true",
      },
      correctAnswer: "A",
    },
    {
      question: "Who wrote the novel 1984?",
      options: {
        A: "George Orwell",
        B: "J.K. Rowling",
        C: "F. Scott Fitzgerald",
        D: "Ernest Hemingway",
      },
      correctAnswer: "A",
    },
    {
      question: "What is the capital city of Australia?",
      options: {
        A: "Sydney",
        B: "Melbourne",
        C: "Canberra",
        D: "Perth",
      },
      correctAnswer: "C",
    },
    {
      question: "What is the longest river in the World",
      options: {
        A: "Volga",
        B: "Dniester",
        C: "Ren",
        D: "Nile",
      },
      correctAnswer: "D",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: {
        A: "Venus",
        B: "Mars",
        C: "Jupiter",
        D: "Saturn",
      },
      correctAnswer: "B",
    },
    {
      question: "What is the largest mammal in the world?",
      options: {
        A: "Elephant",
        B: "Blue Whale",
        C: "Giraffe",
        D: "Hippopotamus",
      },
      correctAnswer: "B",
    },
  ],
};

const leaderBoard = {
  data: [
    {
      name: "Rohit",
      score: 2,
    },
    {
      name: "Rahul",
      score: 1,
    },
    {
      name: "Rohan",
      score: 4,
    },
    {
      name: "Raj",
      score: 3,
    },
  ],
};

function highScore(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("\nCheck your position on the Leader Board", "#fde047"));
  for (let users of sortedScoreList) {
    console.log(
      kuler(`Name: ${users.name} | Score: ${score.score}`, "#b91c1c"),
    );
  }
}

function PlayGame(Answer, correctAnswer) {
  if (Answer === correctAnswer) {
    console.log(kuler("Correct Answer", "#b91c1c"));
    score++;
  } else {
    console.log(kuler("Incorrect Answer", "#f97316"));
    console.log(kuler(`Correct answer is ${correctAnswer}`, "#65a30d"));
  }
}

function displayQuestion(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(
      kuler(`\nQ${i + 1} - ${database.data[i].question}\n`, "#fca311"),
    );
    for (let key in database.data[i].options) {
      console.log(
        kuler(`${key} - ${database.data[i].options[key]}\n`, "#a3e635"),
      );
    }
    let Answer = readlineSync
      .question(kuler("enter your answer - (A/B/C/D) - ", "#14b8a6"))
      .toUpperCase();
    PlayGame(Answer, database.data[i].correctAnswer);
  }
}
displayQuestion(database);
console.log(`Your score is ${score}`);
highScore(leaderBoard);
