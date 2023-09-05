let person = 'Kim'
let age = 25
//console.log(`당신의 이름은 ${perosn}이고, 나이는 ${age}입니다.`)

let tag = function(strings, personExp, ageExp) {
    console.log(strings) //[ '그 사람 ', '은 ', '세 입니다. ' ]
    console.log(personExp) //Kim
    console.log(ageExp) //25
}
//문장과 데이터를 분리할 경우 활용
let output = tag`그 사람 ${person}은 ${age}세 입니다. `
