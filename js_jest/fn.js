// 따로 작성한 함수
function people (name, age) {
    return {name, age, job :undefined}
}

// 오류를 일으키는 함수
function makeError (name) {
    //name값이 없을 때 오류
    if(!name) {
        throw new Error("오류가 발생했습니다");
    }
    console.log(name)
}



// 객체 안에 함수를 넣어 전달
const fn = {
    people,
    makeError,
}
// 함수를 가진 객체를 내보냄
module.exports = fn;