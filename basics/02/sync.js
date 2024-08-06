// 순서대로 실행하기  (결과 비교: 02\results\sync.js)

// JS는 빨리 수행하는 작업부터 하고, 시간이 걸리는 작업을 후에 처리 -> 동시작업이 안됨
// 비동기 : 함수들이 서로 어떤 순서로 실행해야 될지 지정
// 함수 안의 인수로 들어가는 함수는 callback 함수

function displayA() {
    console.log('A');
}
function displayB(callback) {
    setTimeout(() => {
        console.log('B');
        callback();
    }, 2000);
}
function displayC() {
    console.log('C');
}

displayA();
displayB(displayC);