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

// Promise 값을 전달하는 함수 실행 
// 1. then
// 값을 가져올때 return 을 붙여서 사용
test('user Promise', () => { 
    return asyncfn.fetchUserPromise("2").then(
        //then을 통해서 함수를 이용하여 값을 가져올수 있다
        //user는 resolve 통해서 가져온 값
        (user) => { 
            // then 안에서 가져온 값 확인
            expect(user).toEqual({id:"2",name:"User2"})
        });
 })

//2. async/await
test('user Promise await', async () => { 
    const user = await asyncfn.fetchUserPromise("3");
    expect(user).toEqual({id:"3", name:"User3"})
 })