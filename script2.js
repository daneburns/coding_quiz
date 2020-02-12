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
var array1 = [];
var array2 = [];
console.log(scores[0[0]])
for (let i = 0; i < scores.length; i++) {
    
    var array1 = [scores[0]]
    console.log(array1)
     
}

for (let i = 0; i < td.length; i+=2) {
    // console.log(td[i])
    td[i].textContent = array[i]
    td[i+1].textContent = array[i+1]
    
}


clearScores.addEventListener('click', function (e){

    localStorage.clear()

})