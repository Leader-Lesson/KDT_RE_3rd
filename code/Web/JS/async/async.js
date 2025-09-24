// async, await
// Promise를 동기적인 형태로 작성할 수 있도록 도와주는 문법
// async : 함수 코드블럭을 자동으로 프로미스로 변환
// syntatic sugar : 편의를 제공하는 문법
async function fetchUser() {
  return "ian";
}

const user = fetchUser();
// console.log(user);
user.then(console.log);

// await - async안에서 사용가능
// Promise를 동기적으로 쓸 수 있게 해주는 키워드
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple}, ${banana}`;
}

pickFruits().then(console.log);
