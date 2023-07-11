const asyncfn = require('./asyncfn')

test('setTimeout 확인', (done) => {
    //1. 시간이 걸리는 함수 실행 asyncfn.fetchUser()
    //2. 함수를 전달하여서 내용 확인 expect와 toEqual전달
    //3. done을 통해서 expect가 완료 된 후에 
    //   결과 확인할 수 있도록 기다릴수 있다
    asyncfn.fetchUser("green",(user)=>{
        expect(user).toEqual({
            id: "green",
            name : "Usergreen"
        });
        done();
    })
})