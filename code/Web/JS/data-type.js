// JS 자료형
// [원시자료형]
// 1. 문자열(string)
let text = "안녕하세요";
console.log("문자열", text);

// 문자열의 연산
let text2 = " 반갑습니다";
console.log(text + text2); // 문자열의 결합

let name = "ian";
let age = 100;
console.log("안녕하세요. 저는 " + name + "입니다. 나이는 " + age + "살입니다.");

// template literal
// 변수와 문자열을 함께 쓸 수 있도록 하는 문법
console.log(`안녕하세요. 저는 ${name}입니다. 나이는 ${age}살입니다.`);

// 2. 숫자형(number)
// 정수와 실수 구분을 하지 않음
let num = 100;
let num2 = 3.14;
// const num3 = 1000;
// num3 = 10000;
console.log("숫자형", num, num2);

// 3. 불리언/논리형(boolean)
// 참 거짓을 표현하는 true false
let isTrue = true;
let isFalse = false;
console.log("불리언", isTrue, isFalse);

// 4. null(빈 값)
// "값이 없음"을 명시
let greeting = null;
console.log("값이 없음", greeting);
greeting = "안녕하세요";
console.log(greeting);

//  5. undefined
// 값이 정의되지 않은 상태를 포현
let x;
console.log("값이 정의되지 않음", x);

// [객체 자료형 / 참조 자료형]
// 1. 배열(Array)
let fruits = ["사과", "바나나", "수박", "포도", "딸기"];
console.log("배열", fruits);

// 인덱싱
console.log(fruits[3]);
console.log(fruits[-1]);

// at의 경우 음수인덱싱 가능
console.log(fruits.at(2));
console.log(fruits.at(-1));

fruits[3] = "샤인 머스킷";
console.log(fruits);

const korean = [
  ["가", "나", "다"],
  ["라", "마", "바"],
  ["사", "아", "자"],
];

console.log(korean[1][1]);
korean[1][2] = "밥";
console.log("한글", korean);

// 2. 객체(object)
// 키-값 쌍을 값으로 가짐
let cat = {
  name: "장화",
  age: 10,
  isCute: true,
};
console.log("객체", cat);

// 객체의 값 조회
// 1) 점 표기법
// 키가 문자열인 경우만 가능
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);

// 2) 대괄호 표기법
// 키에 변수를 사용하고자 할 때는 반드시 대괄호 표기법을 사용
console.log(cat["name"]);
console.log(cat["age"]);
console.log(cat["isCute"]);

let myKey = "name";
console.log(cat[myKey]);

// [자료형 확인]
console.log(typeof "문자");
console.log(typeof 100);
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof false);
console.log(typeof null); // object? -> 설계상의 실수
console.log(typeof undefined);
console.log(typeof fruits);
console.log(typeof cat);

// [형변환]
// 1) 암시적 형변환 2) 명시적 형변환
console.log("암시적 형변환1", "2" + 3);
console.log("암시적 형변환2", typeof (100 + ""));

// 1. 문자열로 변환 : String()
let str1 = 123;
let str2 = true;
let str3 = undefined;

console.log(String(str1), typeof String(str1));
console.log(String(str2), typeof String(str2));
console.log(String(str3), typeof String(str3));
console.log(str1.toString(), typeof str1.toString());

// 2. 숫자로 변환 : Number()
let n1 = "123";
let n2 = false;
let n3 = "그냥문자열";
let n4 = 3.14;
let n5 = "3.14";

console.log(Number(n1), typeof Number(n1));
console.log(Number(n2), typeof Number(n2));
console.log(Number(n3), typeof Number(n3));
// "정의 되지 않음" => 값이 아예 없는 것 => NaN
console.log(Number(undefined), typeof Number(undefined));
// "값이 없음을 표현하는 값" => 0
console.log(Number(null), typeof Number(null));

console.log(parseInt(n4, 10));
console.log(parseInt(n5, 10));
console.log(parseFloat(n5));
