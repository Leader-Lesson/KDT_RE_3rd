// Promise
// 비동기 수행을 위한 객체
// 상태 : pending -> fulfilled or rejected
// Producer / Consumer

// 1. Producer
// excuter 함수 : 실행함수 -> Promise 생성시 자동 실행
// resolve : 성공시 호출
// reject : 실패시 호출
const promise = new Promise((resolve, reject) => {
  console.log("프로미스 실행...");
  setTimeout(() => {
    // 성공시 호출
    // resolve("ian");

    // 실패시 호출
    reject(new Error("네트워크 에러"));
  }, 2000);
});

// 2. Consumer
// then: resolve 되었을 때 실행
// catch: reject 되었을 때 실행
// finally: 모든 실행이 끝나고 최종적으로 실행 -> 성공 실패 여부에 상관없이 마지막에 호출
promise //
  .then(console.log)
  .catch((error) => console.log(error))
  .finally(() => console.log("마지막에 실행"));

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber //
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, rejcet) => {
      setTimeout(() => resolve(num + 10), 1000);
    });
  })
  .then((num) => console.log("Promise Chaining", num));

// Promise로  UserStorage 리팩토링
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === "ian" && password === "1234") {
          resolve(id);
        } else {
          reject(new Error("존재하지 않는 계정입니다."));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ian") {
          resolve({ name: "ian", role: "leader" });
        } else {
          reject(new Error("권한이 없습니다."));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("아이디를 입력해주세요.");
const password = prompt("비밀번호를 입력해주세요.");

userStorage //
  .loginUser(id, password)
  .then((id) => userStorage.getRoles(id))
  .then((user) => alert(`Hello ${user.name} 당신은! ${user.role}입니다.`));
