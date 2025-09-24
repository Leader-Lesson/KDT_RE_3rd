// Callback
// 자바스크립트 - 동기적 => 코드를 위에서 아래로 순서대로 실행함
// 콜백함수 : 함수의 실행이 끝난 후 이어서 실행되는 함수

// setTimeout : 일정시간(ms)이 지난후 함수를 실행하게 해줌
// Web API : 웹에서만 실행
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("비동기 콜백"), 1000);

// Callback Hell
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === "ian" && password === "1234") {
        onSuccess(id);
      } else {
        onError(new Error("존재하지 않는 계정입니다."));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ian") {
        onSuccess({ name: "ian", role: "leader" });
      } else {
        onError(new Error("권한이 없습니다."));
      }
    }, 1000);
  }
}

// userStorage 인스턴스 생성
const userStorage = new UserStorage();
const id = prompt("아이디를 입력해주세요.");
const password = prompt("비밀번호를 입력해주세요.");

userStorage.loginUser(
  id,
  password,
  (id) => {
    userStorage.getRoles(
      id,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, 당신은 ${userWithRole.role}입니다.`);
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);
