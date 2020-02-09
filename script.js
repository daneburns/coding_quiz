var bodyContainer = document.querySelector('#bodyContainer')
var makeRow = document.createElement('div')
var h1 = document.createElement('h1')
var p = document.createElement('p')
var btn = document.createElement('button')
var start = document.querySelector('#start')
var quizCount = 0;

idArray = [];
questionBody = ['Commonly used data types DO NOT include:', 'The condition in an if/else statement is enclosed within___.', 'Arrays in JavaScript can be used to store___.', 'String values must be enclosed within__ when being assigned to variables.', 'A very useful tool used during development and debugging for printing content to the debugger is:']
questionsArray1 = ['strings', 'booleans', 'alerts', 'numbers']
questionsArray2 = ['quotes', 'curly brackets', 'parentheses', 'square brackets']
questionsArray3 = ['numbers and strings', 'other arrays', 'booleans', 'all of the above']
questionsArray4 = ['commas', 'curly brackets', 'quotes', 'parentheses']
questionsArray5 = ['javascript', 'terminal/bash', 'for loops', 'console.log']
correctAnswers = ['strings', 'parentheses', 'all of the above', 'quotes','console.log' ]
questionsArrayMaster = [questionsArray1, questionsArray2, questionsArray3, questionsArray4, questionsArray5]
ticker = 1;

console.log(questionBody[0])

function clearContainer() {

    idArray.length = 0

    var child = bodyContainer.lastElementChild;
    while (child) {
        bodyContainer.removeChild(child);
        child = bodyContainer.lastElementChild;
    }

}

function clearContainer2(questionsArray) {

    idArray.length = 0
    questionBody.shift();
    console.log(questionBody)

    var child = bodyContainer.lastElementChild;
    while (child) {
        bodyContainer.removeChild(child);
        child = bodyContainer.lastElementChild;
    }
    populateQuestion(bodyContainer, questionsArray)
}

start.addEventListener('click', function (e) {

    clearContainer()
    populateQuestion(bodyContainer, questionsArray1)


})

function populateQuestion(parent, questionArray) {

    parent.appendChild(h1)
    h1.textContent = questionBody[0]


    for (let i = 0; i < questionArray.length; i++) {
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
    
    if(questionArray.includes('quotes') && questionArray === questionsArray4){
        var buttons = document.getElementById('2')
        console.log(buttons)
            buttons.classList.add('correct')
        }
}


bodyContainer.addEventListener('click', function (e) {
    event.preventDefault()
    if (event.target.innerText === 'strings') {

    ticker++
    clearContainer2(questionsArrayMaster[ticker]) }

if (event.target.innerText === 'parentheses') {
    
    ticker++
    clearContainer2(questionsArrayMaster[ticker])


}
if (event.target.innerText === 'all of the above') {

    ticker++
    clearContainer2(questionsArrayMaster[ticker])


}
if (event.target.classList.contains('correct')) {

    ticker++
    clearContainer2(questionsArrayMaster[ticker])


} 

if (event.target.innerText === 'console.log') {

    ticker++
    clearContainer2(questionsArrayMaster[ticker])


} 


else if (event.target.innerText === 'booleans' || event.target.innerText === 'alerts' || event.target.innerText === 'numbers'
    || event.target.innerText === 'curly brackets' || event.target.innerText === 'square brackets') {
    ticker++
    clearContainer2(questionsArrayMaster[ticker])
    // var redText = bodyContainer.appendChild(makeRow)
    // redText.setAttribute('class', 'redText')
    // redText.classList.add('p-5')
    // bodyContainer.lastChild.innerText = 'WRONG!'

}
    })





console.log(quizCount)




