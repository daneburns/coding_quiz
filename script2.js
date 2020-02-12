var clearScores = document.querySelector('#clear')
var table = document.getElementsByTagName('tbody')
var td = document.querySelectorAll('td')
     



function allStorage() {

    var archive = {}
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        archive[ keys[i] ] = localStorage.getItem( keys[i] );
    }

    return archive;
}

var allStorage = allStorage()

var scores = [];
for (var initial in allStorage) {
    scores.push([initial, allStorage[initial]]);
}

scores.sort(function(a, b) {
    return a[1] + b[1];
});

// scores.forEach(element => {
// console.log(tr[0 + i])
//     tr[0 + i].textContent = element[0]
//     tr[1 + i].textContent = element[1]

// });
var tdOdd = [];
var tdEven = [];



for (let i = 0; i < td.length; i+=2) {
    tdOdd.push(td[i])
     
}

for (let i = 1; i < td.length; i+=2) {
    tdEven.push(td[i])
}



for (let i = 0; i < scores.length; i++) {
    tdEven[i].textContent = scores[i][1]
    
}

for (let i = 0; i < scores.length; i++) {
    tdOdd[i].textContent = scores[i][0]
    
}

// tdEven[0].textContent = scores[0][1]
// tdOdd[0].textContent = scores[0][0]
// tdEven[1].textContent = scores[1][1]
// tdOdd[1].textContent = scores[1][0]
// tdEven[2].textContent = scores[2][1]
// tdOdd[2].textContent = scores[2][0]
// tdEven[3].textContent = scores[3][1]
// tdOdd[3].textContent = scores[3][0]
// tdEven[4].textContent = scores[4][1]
// tdOdd[4].textContent = scores[4][0]
// tdEven[5].textContent = scores[5][1]
// tdOdd[5].textContent = scores[5][0]
     

clearScores.addEventListener('click', function (e){

    localStorage.clear()
    window.location = 'index.html'

})