// 문자열 메서드
let str = "    Hello Javascript World    ";

console.log(`원본: ${str}`);
console.log(`길이: ${str.length}`); // 함수실행X -> 속성

// 공백제거 : trim
str = str.trim();
console.log(`공백제거: ${str.trim()}`); // 원본 변경X
console.log(`원본: ${str}`);

// 대소문자 변환
console.log(`대문자변환: ${str.toUpperCase()}`); // 대문자로 변환, 원본 변경X
console.log(`소문자변환: ${str.toLowerCase()}`); // 소문자로 변환, 원본 변경X
console.log(`원본: ${str}`);

// 탐색
console.log(`인덱스 찾기: ${str.indexOf("Java")}`); // 특정 문자열의 인덱스 반환
console.log(`문자열의 포함여부: ${str.includes("Java")}`); // 특정 문자열의 인덱스 반환

// 슬라이싱
console.log(`슬라이싱: ${str.slice(6, 16)}`); // 원본 변경X, 시작 포함 끝 안 포함

// 치환
// str = str.replace("World", "Universe");
console.log(`한 개만 치환: ${str.replace("World", "Universe")}`); // 원본 변경X
console.log(`전부 치환: ${str.replaceAll("l", "L")}`); // 원본 변경X
console.log(`원본: ${str}`);

// 분할 & 합치기
console.log(`분할: ${str.split(" ")}`); // 원본 변경X
let test = str.split(" ");
console.log(test);
console.log(`합치기: ${"Hello".concat(" Coding ", "World")}`); // 원본 변경X
