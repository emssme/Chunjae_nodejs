var a = 20;  //재선언o, 변수값 변경o
let b = 200;  //재선언x, 변수값 변경o
const c = 2000;  //재선언x, 변수값 변경x (주로 상수에 사용)
//백틱(backtick = ``)으로 감싼 문장 => 템플릿(templete)
console.log("Hello, NodeJS!")
console.log("var a: "+a+", let b: "+b+", const c: "+c)
console.log(`var a: ${a}, let b: ${b}, const c: ${c}`)