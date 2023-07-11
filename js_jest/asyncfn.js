// 시간이 걸리는 콜백함수 작성
// setTimeout에 작성한 user값을 return을 통해 전달할수 없어서
// checkTest라는 *함수를 fetchUser를 사용할때 만들어서 전달*
// setTimeout으로 시간이 지난 이후에 checkTest 진행가능
function fetchUser(id, checkTest) {
    // 서버대신에 시간이 걸리는 timeout 함수 사용
    setTimeout(()=>{
        console.log("0.1초가 걸렸습니다")
        const user = {
            id :id,
            name : "User"+id
        }
        checkTest(user)
    }, 100);
}

// 비동기함수


// 함수를 전달할 객체
const asyncfn = {
    fetchUser
}

// 내보내서 사용
module.exports = asyncfn;