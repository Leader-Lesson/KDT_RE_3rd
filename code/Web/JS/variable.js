// JS 변수
// 1. var
// Modern JS에서는 var를 사용하지 않음(중복 선언의 문제)
console.log("띠용", a);

// 변수의 선언
var a;
console.log("변수의 선언", a);

// 초기화, 값의 할당
a = 10;
console.log("변수 초기화", a);

// 값의 재할당
a = 100;
console.log("재할당", a);

// 변수의 중복선언
var a = 1000;
console.log("var 중복선언", a);

// 2. let : 변수 값의 재할당이 가능함
// 변수의 선언
let b;
console.log("let 선언", b);

// 변수 초기화
b = 3.14;
console.log("let 초기화", b);

// 재할당
b = "재할당";
console.log("재할당", b);

// 변수의 중복선언 불가
// let b = 100;

// 3. const : 변수의 재할당이 불가능함(권장)
// costant(상수)의 약자
// 변수의 선언만 하는 것 불가
// const c;

// 변수의 선언과 초기화를 함께
const c = 1000;
console.log("const 선언", c);

// 재할당 불가
c = 10000;
console.log("재할당", c);

// 변수 이름 규칙
// 변수명 스타일 - camelCase
// 관례적인 것일 뿐 의무는 아님
let myVar;

// 숫자시작 X
// let 1
// let 1Var

// 키워드 사용 X
// let let
// let for
// let while
// let if

// 변수에 공백x
// let my var

// 특수문자: _, $사용
let $myVar;
let my_var;
