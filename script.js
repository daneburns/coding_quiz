var bodyContainer = document.querySelector("#bodyContainer");
var makeRow = document.createElement("div");
var h1 = document.createElement("h1");
var p = document.createElement("p");
var btn = document.createElement("button");
var start = document.querySelector("#start");
var timeEl = document.getElementById("timerCount");
var timer = parseInt(timeEl.textContent);
var input = document.createElement('input')
var buttons = document.getElementsByTagName('button')
var button = document.createElement('button')

idArray = [];
questionBody = [
  "Commonly used data types DO NOT include:",
  "The condition in an if/else statement is enclosed within___.",
  "Arrays in JavaScript can be used to store___.",
  "String values must be enclosed within__ when being assigned to variables.",
  "A very useful tool used during development and debugging for printing content to the debugger is:"
];
questionsArray1 = ["strings", "booleans", "alerts", "numbers"];
questionsArray2 = [
  "quotes",
  "curly brackets",
  "parentheses",
  "square brackets"
];
questionsArray3 = [
  "numbers and strings",
  "other arrays",
  "booleans",
  "all of the above"
];
questionsArray4 = ["commas", "curly brackets", "quotes", "parentheses"];
questionsArray5 = ["javascript", "terminal/bash", "for loops", "console.log"];
questionsArrayMaster = [
  questionsArray1,
  questionsArray2,
  questionsArray3,
  questionsArray4,
  questionsArray5
];
ticker = 0;
correctAnswers = [
  "strings",
  "parentheses",
  "all of the above",
  "quotes",
  "console.log"
];

function setTime() {
  var timer = 100;
  timerInterval = setInterval(function() {
    timer--;
    timeEl.textContent = timer;

    if (timer === 0) {
      clearInterval(timerInterval);
      alert("You lose!");
    }
  }, 200);
}

function stopTime() {
  clearInterval(timerInterval);
}

function setTimeCorrect() {
  timerInterval = setInterval(function() {
    timer--;

    timeEl.textContent = timer;

    if (timer === 0) {
      clearInterval(timerInterval);
      alert("You lose!");
    }
  }, 300);
}

function clearContainer() {
  idArray.length = 0;
  var child = bodyContainer.lastElementChild;
  while (child) {
    bodyContainer.removeChild(child);
    child = bodyContainer.lastElementChild;
  }
  populateQuestion(bodyContainer, questionsArray1);
}
function scoreScreen(){
idArray.length = 0;
  var child = bodyContainer.lastElementChild;
  while (child) {
    bodyContainer.removeChild(child);
    child = bodyContainer.lastElementChild;
  }
bodyContainer.remove()
var newBodyContainer = document.body.appendChild(document.createElement('div'))
newBodyContainer.setAttribute('class', 'container justify-content-center')
var newBodyContainerId = document.querySelector('.container')
var score = newBodyContainerId.appendChild(document.createElement('div'))
score.setAttribute('class', 'row justify-content-center')
var scoreText = score.appendChild(document.createElement('h1'))
scoreText.textContent = 'Your final score is: ' + timer
var formRow = newBodyContainerId.appendChild(document.createElement('div'))
formRow.setAttribute('class', 'row')
var formCol = formRow.appendChild(document.createElement('div'))
formCol.setAttribute('class', 'col-centered')
var initials = formCol.appendChild(document.createElement('input'))
var submit = formCol.appendChild(document.createElement('button'))
submit.setAttribute('class', 'btn btn-primary')
submit.textContent = 'Submit Score'
initials.setAttribute('placeholder', 'Type initials here!')
initials.setAttribute('class', 'col-centered')
submit.addEventListener('click', function(e) {
  localStorage.setItem(initials.value, timer)
  window.location = 'highscores.html'
})


// var poop2 = document.body.appendChild(makeRow)
// poop2.setAttribute('class', 'row d-flex justify-content-center')
// poop2.innerText = ' '


// var test5 = document.body.appendChild(makeRow)
// test5.setAttribute('id', 'testId')
// poop4 = test5.appendChild(p)
// poop4.textContent = 'Your final score is: ' + timer
// timeEl.textContent = ''
// var forms = document.body.appendChild(makeRow)
// forms.setAttribute('class', 'form-row-div row justify-content-center')
// var input2 = forms.appendChild(input)
// input2.setAttribute('placeholder', 'Type your initials here')
// input2.setAttribute('type', 'text')
// input2.setAttribute('class', 'mx-auto')
// var buttonDiv = document.body.appendChild(makeRow)
// buttonDiv.setAttribute('class', 'row justify-content-center p-3')
// var submitButton = buttonDiv.appendChild(button)
// submitButton.setAttribute('class', 'btn btn-primary justify-content-center p-2')
// submitButton.textContent = 'Submit'
// localStorage.setItem('DB', timer)

}

function clearContainer2(questionsArray) {
  idArray.length = 0;
  questionBody.shift();

  var child = bodyContainer.lastElementChild;
  while (child) {
    bodyContainer.removeChild(child);
    child = bodyContainer.lastElementChild;
  }
  populateQuestion(bodyContainer, questionsArray);
}

function populateQuestion(parent, questionArray) {
  parent.appendChild(h1);
  h1.textContent = questionBody[0];

  for (let i = 0; i < questionArray.length; i++) {
    idArray.push(i);
  }

  idArray.forEach(element => {
    one = parent.appendChild(document.createElement("button"));
    one.setAttribute("class", "btn");
    one.classList.add("btn-primary");
    one.setAttribute("id", element);
    one.classList.add("mx-auto");
    one.classList.add("mt-3");
  });

  questionArray.forEach(element2 => {
    var buttons = document.getElementById(questionArray.indexOf(element2));
    buttons.textContent = element2.toString();
  });

  // if (questionArray.includes('quotes') && questionArray === questionsArray4) {
  //     var buttons = document.getElementById('2')

  //     buttons.classList.add('correct')
  // }
  var buttons = document.getElementsByClassName("btn");
  
  for (let i = 0; i < buttons.length; i++) {
    var buttonsArray = buttons[i];
    
    if (buttonsArray.textContent === correctAnswers[0]) {
      buttonsArray.classList.add("correct");
      correctAnswers.shift();
      
    }
  }
  questionsArrayMaster.shift();
}

bodyContainer.addEventListener("click", function(e) {
  event.preventDefault();
 
  if(event.target === start){
    event.preventDefault();
    clearContainer();
    setTime();
    return;

  }

  else if (event.target.classList.contains("correct") && questionsArrayMaster.length > 0) {
    
    stopTime();
    timer += 50;
    setTimeCorrect();
    clearContainer2(questionsArrayMaster[0]);
    var correctText = bodyContainer.appendChild(makeRow)
    correctText.setAttribute('class', 'row correctText')
    correctText.textContent = 'Correct!'
  } 

  
   

  if (event.target === bodyContainer){
    
  }
 
 
  
  else if(!event.target.classList.contains('correct') && questionsArrayMaster.length > 0){
    ticker++;
    stopTime();
    timer -= 50;
    setTimeCorrect();
    clearContainer2(questionsArrayMaster[0]);
    var wrongText = bodyContainer.appendChild(makeRow)
    wrongText.setAttribute('class', 'row wrongText')
    wrongText.textContent = 'WRONG!'
  }

  else if(!event.target.classList.contains('correct') && questionsArrayMaster.length === 0){
    ticker++;
    stopTime();
    timer -= 50;
    
    scoreScreen();
    var wrongText = document.body.appendChild(makeRow)
    wrongText.setAttribute('class', 'row wrongText justify-content-center')
    wrongText.textContent = 'WRONG!'
  }
  
 else if (event.target.classList.contains("correct") && questionsArrayMaster.length === 0) {
    
    stopTime();
    timer += 50;
    bodyContainer.remove()
    scoreScreen();
    var correctText = document.body.appendChild(makeRow)
    correctText.setAttribute('class', 'row correctText justify-content-center')
    correctText.textContent = 'Correct!'
  } 

});



// if (event.target.innerText === 'parentheses') {

//     ticker++
//     stopTime()
//     timer += 20
//     setTimeCorrect();

//     clearContainer2(questionsArrayMaster[ticker])

// }
// if (event.target.innerText === 'all of the above') {

//     ticker++
//     stopTime()
//     timer += 20
//     setTimeCorrect();
//     clearContainer2(questionsArrayMaster[ticker])

// }
// if (event.target.classList.contains('correct')) {

//     ticker++
//     stopTime()
//     timer += 20
//     setTimeCorrect();
//     clearContainer2(questionsArrayMaster[ticker])

// }

// if (event.target.innerText === 'console.log') {

//     ticker++
//     stopTime()
//     timer += 20
//     setTimeCorrect();
//     clearContainer2(questionsArrayMaster[ticker])

// }

// else  {
//     ticker++
//     clearContainer2(questionsArrayMaster[ticker])
//     // var redText = bodyContainer.appendChild(makeRow)
//     // redText.setAttribute('class', 'redText')
//     // redText.classList.add('p-5')
//     // bodyContainer.lastChild.innerText = 'WRONG!'

// }
