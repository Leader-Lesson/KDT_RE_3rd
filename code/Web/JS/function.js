// 함수
// 특정 기능을 하는 코드들의 모음
console.log("띠용?", myFunc("이게 돼?")); // 호이스팅(Hoisting)
// console.log("과연..?", greeting("어서오세요"));

// 1. 함수의 선언
// 1) 함수 선언식(기본적인 함수 선언)
// 스코프 : { }안의 영역 (block)
// 매개변수와 return 생략 가능
function myFunc(parameter) {
  // 구현할 코드
  return parameter;
}

// 함수의 호출
console.log(myFunc("안녕하세요"));

// 2) 함수 표현식
// 주로 익명함수와 함께 활용
const greeting = function (greeting) {
  return greeting;
};

// 함수의 호출
console.log(greeting("반갑습니다"));

// 3) 화살표 함수
// lambda에 대응
// 콜백함수에 많이 활용됨
// 화살표 함수의 축약형
const square = (x) => x * x; // 한줄로 썼을 때 자동으로 return
console.log("정사각형의 넓이", square(10));

// 화살표 함수의 확장
// scope {}를 만들면 -> 명시적으로 return 해야함
const triangle = (base, height) => {
  const area = (base * height) / 2;
  return area;
};
console.log("삼각형의 넓이", triangle(20, 5));
