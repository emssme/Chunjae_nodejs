//Arrow Function(화살표 함수) => 자바의 람다식과 같으며, ES6(2015)부터 지원
/*
1. 매개변수가 없는 경우
function 함수명() { ... }
var 함수명 = function() { ... }
var 함수명 = () => { ... }

2. 매개변수가 하나인 경우
function 함수명(매개변수명) { ... }
var 함수명 = function(매개변수명) { ... }
var 함수명 = 매개변수명 => { ... }

3. 매개변수가 여러개인 경우
function 함수명(매개변수명1, 매개변수명2) { ... }
var 함수명 = function(매개변수명1, 매개변수명2) { ... }
var 함수명 = (매개변수명1, 매개변수명2) => { ... }

4. 반환이 있는 경우
function 함수명(매개변수명1, 매개변수명2) { return 반환식 또는 값; }
var 함수명 = function(매개변수명1, 매개변수명2) { return 반환식 또는 값; }
var 함수명 = (매개변수명1, 매개변수명2) => { return 반환식 또는 값; } 또는
var 함수명 = (매개변수명1, 매개변수명2) => { 반환식 또는 값; }
var 함수명 = (매개변수명1, 매개변수명2) => { 
    계산문 또는 연산문 또는 명령;
    반환식 또는 값;
 }
*/

var fnc1 = () => console.log("콘솔에 출력합니다."); //매개변수x, 반환x

var fnc2 = (a, b) => console.log("계산결과"+ (a+b)); //매개변수o, 반환x

var fnc3 = () => 27*27; //매개변수x, 반환o

var fnc4 = (a, b) => a*10+b*9;  //매개변수o, 반환o

//익명의 함수: 특정 로직이나 함수(메소드)안에 있는 이름이 없이 곧바로 실행되는 함수
var arr = [75, 90, 80, 65];
arr.map(function(value){
    console.log(value*value);
});

var fnc5 = arr.map(value => value * value);