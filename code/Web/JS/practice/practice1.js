let mathScore = Number(prompt("수학점수를 입력해주세요"));
let engScore = Number(prompt("영어점수를 입력해주세요"));

console.log(typeof mathScore);
console.log(typeof engScore);
console.log(mathScore + engScore);

let avgScroe = (mathScore + engScore) / 2;
console.log(`평균점수: ${avgScroe}`);
