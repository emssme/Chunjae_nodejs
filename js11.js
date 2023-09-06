var test1 = [10, 15, 20, 30, 40, 50];
console.log(test1.map(function(c) {return c<=20})); //[ true, true, true, false, false, false ]
console.log(test1.map(c => c<=20));  //[ true, true, true, false, false, false ]
//true/false를 구분하고 싶을때는 map이 편함

console.log(test1.map(c => { if(c<=20) return c;})); //[ 10, 15, 20, undefined, undefined, undefined ]
//error를 걸러내고 싶으면 map 대신 filter 사용
console.log(test1.filter(c => { if(c<=20) return c;})); //[ 10, 15, 20 ]
