// 반복문
// for, while

// 1. for문
// 횟수를 기준으로한 반복
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("------------");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("------------");

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("------------");

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}
console.log("------------");

// 1부터 100까지 합구하기
let sum = 0;

for (let i = 1; i < 101; i++) {
  sum += i;
}
console.log("1~100까지의 합", sum);

console.log("------------");

// 반복문 실습(1)
for (let i = 1; i <= 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}

// 2중 for문
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}

console.log("------------");

// 반복문 실습(2) 구구단
for (let i = 2; i < 10; i++) {
  console.log(`==== ${i}단 ====`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}
console.log("===========");
// 2. while문
// 조건을 기준으로한 반복
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// let blinker = "초록불";
// while (blinker === "초록불") {
//   console.log("계속 가요!");
//   blinker = prompt("신호등 상태를 입력하세요(초록불/빨간불");
// }

// 루프제어문
// break : 반복문의 탈출
// while (true) {
//   console.log("계속 가요!");
//   blinker = prompt("신호등 상태를 입력하세요(초록불/빨간불");
//   if (blinker === "빨간불") {
//     break;
//   }
// }

// continue : 실행을 건너뜀
// let sumAge = 0;
// let count = 0;
// while (count < 5) {
//   let age = Number(prompt());
//   if (age > 120 || age < 0) {
//     console.log("유효하지 않은 나이에요");
//     continue;
//   }
//   sumAge += age;
//   count++;
// }

// console.log(`평균나이: ${sumAge / count}`);

// while 실습
// 0~100까지의 숫자 중에서 2 또는 5의 배수의 총합 구하기
let total = 0;
let j = 0;

while (j <= 100) {
  if (j % 2 === 0 || j % 5 === 0) {
    total += j;
  }
  j++;
}

console.log("0~100까지의 합", total);
