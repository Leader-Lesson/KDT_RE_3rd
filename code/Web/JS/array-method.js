// 배열 메서드
let arr = [10, 20, 30, 40, 50];

console.log("원본:", arr);
console.log("길이", arr.length);

// 추가/삭제
arr.push(60); // 뒤로 추가
console.log("push(60):", arr);
arr.unshift(0); // 앞으로 추가
console.log("unshift(0):", arr);

let tmp = arr.pop(); // 뒤 삭제, 제거한 요소 리턴
console.log(tmp);
console.log("pop():", arr);
tmp = arr.shift(); // 앞 삭제, 제거한 요소 리턴
console.log(tmp);
console.log("shift():", arr);

// 슬라이싱
let sliced = arr.slice(1, 4);
console.log("slice(1,4):", arr, sliced);

// splice : 기존 요소를 삭제 또는 교체 -> 원본 변경
arr.splice(1, 0, 15);
console.log("splice(1,0,15):", arr);

arr.splice(4, 0, 35);
console.log("splice(4,0,35):", arr);

arr.splice(4, 1, 100); // 삭제와 함께 추가
console.log("splice(4,1,100):", arr);

// 결합
let arr2 = [100, 200];
console.log("concat:", arr.concat(arr2)); // 원본 변경X

// 탐색
console.log("indexOf:", arr.indexOf(100));
console.log("includes:", arr.includes(200));

// 정렬 : 원본 변형
let nums = [3, 1, 5, 4, 2];

nums.sort(); // 기본 : 오름차순
console.log("sort(asc):", nums);
nums.sort((a, b) => b - a); // 내림차순
console.log("sort(desc):", nums);

let users = [
  {
    id: 3,
    name: "이안",
  },
  {
    id: 2,
    name: "김철수",
  },
  {
    id: 4,
    name: "홍길동",
  },
  {
    id: 1,
    name: "이영희",
  },
];

users.sort((a, b) => a.id - b.id);
console.log(users);

nums.reverse();
console.log("reverse:", nums);

// 순회(map, filter, reduce), 원본 변경X
// map : 원소를 순회하며 함수를 적용
nums = nums.map((x) => x * 2);
console.log("map(x*2):", nums);

// filter : callback을 기준으로 원소를 필터링해서 반환함
let filtered = nums.filter((x) => x > 5);
console.log("filter(x>5):", filtered);

// reduce : 앞의 원소에 대해 뒤의 원소를 연산한 결과를 누적함
// for(let i = 0 ; i < nums.length ; i++) {
//   sum += nums[i]
// }
let sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log("reduce(sum):", sum);
console.log("-------------------------");

// 배열 순회(like python)
let fruits = ["사과", "배", "포도", "딸기", "수박"];

// c스타일 for문
for (let i = 0; i < fruits.length; i++) {
  console.log("c스타일", fruits[i]);
}
console.log("-------------------------");

// 파이썬 스타일(공식용어 아니에요...)
for (let fruit of fruits) {
  console.log("py스타일", fruit);
}
console.log("-------------------------");

// 배열 메서드
fruits.forEach((f) => console.log("forEach", f));
console.log("-------------------------");

// 실습
// 1. 0~100 까지의 정수 배열
let numbers = [];

for (let i = 0; i < 101; i++) {
  numbers.push(i);
}

console.log("원본배열", numbers);

// 2. for, for of, foreach로 0~100까지의 합 구하기
// for of
let sum1 = 0;
for (let n of numbers) {
  sum1 += n;
}
console.log("for of 합", sum1);

// forEach
let sum2 = 0;
numbers.forEach((n) => (sum2 += n));
console.log("forEach 합", sum2);

// reduce
let sum3 = numbers.reduce((acc, cur) => acc + cur);
console.log("reduce 합", sum3);

console.log("-------------------------");

// 실습2
let fruits2 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits3 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = fruits2.filter((fruit) => fruits3.includes(fruit));
console.log("same", same);

let diff = fruits2.filter((fruit) => !fruits3.includes(fruit));
console.log("diff", diff);
