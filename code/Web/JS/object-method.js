// 객체 메서드
let user = {
  name: "ian",
  age: 15,
  city: "Seoul",
};

console.log("원본", user);

// key 추출 : 배열로 반환
console.log("키 추출:", Object.keys(user));

// 값 추출 : 배열로 반환
console.log("값 추출:", Object.values(user));

// [키, 값] 추출 : 배열로 반환
console.log("키,값 추출:", Object.entries(user));

// 배열을 객체로 변환
let entries = [
  ["id", 101],
  ["name", "김철수"],
];

console.log("배열에서 객체 생성:", Object.fromEntries(entries));
console.log("---------------------------");

// 객체 순회
for (let key in user) {
  console.log("key:", key, ", value:", user[key]);
}
