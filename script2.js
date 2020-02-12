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
console.log(scores[0][0])
console.log(scores[0][1])
console.log(scores[1][0])
console.log(scores[1][1])


for (let i = 0; i < td.length; i+=2) {
    tdOdd.push(td[i])
     
}

for (let i = 1; i < td.length; i+=2) {
    tdEven.push(td[i])
}
console.log(tdEven)
console.log(tdOdd)

for (let i = 0; i < scores.length; i++) {
    tdEven[i].textContent = scores[i][i+1]
     
}

for (let i = 0; i < scores.length; i++) {
    tdOdd[i].textContent = scores[i][i]
     
}

clearScores.addEventListener('click', function (e){

    localStorage.clear()

})