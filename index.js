import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let word = "digger"
let wordArr = []
var emptyArr
var deathCount  = 0

startGame()

function startGame() {

  rl.question('Start new game? (y/n)', (answer) => {
    if ( answer === 'y' ) {
      wordArr = word.split("")
      createBlanks()
      promptLetter()

    } else {
      console.log('Goodbye!');
      rl.close();
    }
  });

}


function createBlanks() {
  emptyArr = wordArr.map((l)=>{
    return "_"
  })
  console.log(emptyArr.join(''))
}


function promptLetter() {

  rl.question('Guess a letter ', (guess) => {
    checkGuess(guess)
   // rl.close();
    checkProgress()
  });

}

function checkProgress(){
  if(emptyArr.join('') === wordArr.join('')) {
    console.log("you win!");
    startGame()
  } else {
    promptLetter()

  }
}

function checkGuess(guess) {
  var count = 0
  for (var i = 0; i <= wordArr.length; i++){
    if(guess === wordArr[i]) {
      count++
      updateEmptyStr(i, wordArr[i])
    }
  }
  updateHangman(count)
  console.log(deathCount, "deathCount");
}

function updateHangman(count){

 if (count === 0) {
  deathCount++
  switch (deathCount) {
    case 0 : console.log(`
         ______
        |     |
        |
        |
        |
      __|\__


       `
      );
     break;
    case 1 : console.log(`
         ______
        |     |
        |     0
        |
        |
      __|\\__


       `
      );
      break;
    case 2 : console.log(`
         ______
        |     |
        |     0
        |     |
        |
      __|\\__


       `
      );
      break;
    case 3 : console.log(`
         ______
        |     |
        |     0
        |    /|
        |
      __|\\__

       `
      );
      break;
    case 4 : console.log(`
         ______
        |     |
        |     0
        |    /|\\
        |
      __|\\__


       `
      );
      break;
    case 5 : console.log(`
         ______
        |     |
        |     0
        |    /|\\
        |    /
      __|\\__

       `
      );
      break;
    case 6 : console.log(`
         ______
        |     |
        |     0
        |    /|\\
        |    / \\
      __|\\__

       `
      );
      break;
    default : 
      console.log("you dead");
      startGame()
}
}

}


function updateEmptyStr(i, guess){
emptyArr[i] = guess
console.log(emptyArr.join(""))
}



