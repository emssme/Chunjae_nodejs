let person = 'Kim'
let age = 25
//console.log(`당신의 이름은 ${perosn}이고, 나이는 ${age}입니다.`)

let tag = function(Strings, personExp, ageExp) {
    console.log(Strings)
    console.log(personExp)
    console.log(ageExp)
}

let output = tag`그 사람 ${person}은 ${age}세 입니다. `