<script type="text/javascript">

var wins = 0;
var losses = 0;
var guessremain = 9;
var lettersGuessed = [];
var randomLetter;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function start(){
  wins = 0
  losses = 0
  guessremain = 9 
  randomLetter = generateRandomLetter(alphabet).toLowerCase()
}
start()

console.log(randomLetter)

function generateRandomLetter(arr){
  var randNum = Math.floor(Math.random() * arr.length);
  return arr[randNum]
}

document.onkeyup = function(event) {

  // display number of gueeses remaining
  var userLetterLowerCase = event.key.toLowerCase()
  // console.log("hello")

  if (!lettersGuessed.includes(userLetterLowerCase) && alphabet.includes(userLetterLowerCase)){
      lettersGuessed.push(userLetterLowerCase)
      renderGuesses()
      renderremainguess()
      renderwins()
      renderlosses()
      if(randomLetter === userLetterLowerCase){
        wins++;
        // console.log('BOOM')
       //Using this start() makes wins increment (see note on top) but does not reset losses
        //start()        //Using this start() or BOTH start()s makes losses reset to 0 between games but does not increment wins 
      }else{
        // console.log('bye')
        if(guessremain > 1){
          // losses++
          guessremain--
          // console.log('happy festivus')
        }else{
          losses++
          guessremain--
          // console.log('merry xmas')
          start();
        }
      }
  }
  
}

function renderGuesses(){
  document.querySelector("#guessedLetters").innerHTML = lettersGuessed.join(' ');
}
function renderremainguess(){
  document.querySelector('#guessCount').innerHTML = guessremain;
  // console.log(guessremain)
}
function renderwins(){
  document.querySelector('#winCount').innerHTML = wins;
  console.log('hi')
}
function renderlosses(){
  document.querySelector('#loseCount').innerHTML = losses;
  // console.log(guessremain)
}
// var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



// var guessedLetters = document.getElementById("guessedLetters");

// var html =
//           "<p>You chose: " + guessedLetters + "</p>" +
//           "<p>The computer chose: " + alphabet[randlet] + "</p>" +
//           "<p>wins: " + wins + "</p>" +
//           "<p>losses: " + losses + "</p>" + 
//           "<p>guesses left: " + guessremain + "</p>";

//         // Set the inner HTML contents of the #game div to our html string
//         document.querySelector("#game").innerHTML = html;




   


// document.onkeyup = function(event) {
//         console.log(event)
//         guessedLetters.textContent = event.key;
//       };

// if (alphabet[randlet] == guessedLetters) {
// wins++
// }
// else {
// guessremain--
// };

// if (guessremain === 0) {
//  losses++
// };
 </script>