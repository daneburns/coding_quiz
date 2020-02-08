var bodyContainer = document.querySelector('#bodyContainer')
var makeRow = document.createElement('div')
var h1 = document.createElement('h1')
var p = document.createElement('p')
var btn = document.createElement('button')
var start = document.querySelector('#start')
idArray = [];
questionBody = ['Commonly used data types DO NOT include:', 'The condition in an if/else statement is enclosed within___.', 'Arrays in JavaScript can be used to store___.', 'String values must be enclosed within__ when being assigned to variables.', 'A very useful tool used during development and debugging for printing content to the debugger is:']
questionsArray1 = ['strings', 'booleans', 'alerts', 'numbers']
questionsArray2 = ['quotes', 'curly brackets', 'parentheses', 'square brackets']
questionsArray3 = ['numbers and strings', 'other arrays', 'booleans', 'all of the above']
questionsArray4 = ['commas', 'curly brackets', 'quotes', 'parentheses']
questionsArray5 = ['javascript', 'terminal/bash', 'for loops', 'console.log']

function clearContainer() {

    var child = bodyContainer.lastElementChild;
    while (child) {
        bodyContainer.removeChild(child);
        child = bodyContainer.lastElementChild;
    }
}

start.addEventListener('click', function (e) {

    clearContainer()
    populateQuestion(bodyContainer, 4, questionsArray1, 0)

})

function populateQuestion(parent, number, questionArray, questionNum) {

  
    parent.appendChild(h1)
    h1.textContent = questionBody[questionNum]

    for (let i = 0; i < number; i++) {
        idArray.push(i)

    }

    idArray.forEach(element => {
        one = parent.appendChild(document.createElement('button'))
        one.setAttribute('class', 'btn')
        one.classList.add('btn-primary')
        one.setAttribute('id', element)
        one.classList.add('mx-auto')
        one.classList.add('mt-3')
    })

    questionArray.forEach(element2 => {
        var buttons = document.getElementById(questionArray.indexOf(element2))
        buttons.textContent = element2.toString()

    });
   


    bodyContainer.addEventListener('click', function(e) {
        event.preventDefault()
        if(event.target.innerText === 'strings'){
            bodyContainer.appendChild(makeRow)
            bodyContainer.lastChild.innerText = 'Success!'
            setTimeout(function(){
                clearContainer()
            }, 1000);
        }
        else if (event.target.innerText === 'booleans' || event.target.innerText === 'alerts' || event.target.innerText === 'numbers'){
            bodyContainer.appendChild(makeRow)
            bodyContainer.lastChild.innerText = 'WRONG!'
            setTimeout(function(){
                clearContainer()
            }, 1000);
        }
    })
    

}







