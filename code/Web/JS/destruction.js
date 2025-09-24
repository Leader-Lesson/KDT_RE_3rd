// 구조분해할당
// 배열의 구조분해 할당
const arr1 = [10, 20, 30, 40, 50];
const [ten, twenty, thirty, fourty, fifty] = arr1;

// 기본값 지정
const arr2 = ["치킨", "피자"];
const [a, b, c = "콜라"] = arr2;

// 객체의 구조분해 할당 -> 키를 기준으로 할당
const obj = {
  name: "ian",
  age: 25,
  city: "seoul",
};

const { name, age, city, hobby = "독서" } = obj;
console.log("객체 구조분해할당", name, age, city, hobby);

// 전개연산자 ... (spread syntax)
// 배열의 전개
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const spread = [...arr3, ...arr4];
console.log("spread", spread);

// 문자열의 전개
const spread2 = [..."HELLO"];
console.log("spread2", spread2);

// 객체의 전개
const chip = {
  base: "포카칩",
  company: "오리온",
};
const potatoChip = {
  ...chip,
  flavor: "Onion",
};
console.log("객체 전개", potatoChip);

// rest 파라미터
const values = ["가", "나", "다", "라", "마"];

function myFunc(a, b, c, ...rest) {
  // 순서대로 받고, 나머지는 rest에 넣어줘
  console.log(a, b, c);
  console.log("rest", rest);
}
myFunc(...values);

const icecream = {
  company: "빙그레",
  flavor: "초코맛",
  price: 2000,
};

const { flavor, ...abc } = icecream;
console.log(flavor);
console.log("rest", abc);
