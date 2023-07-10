const fn = require('./fn');

test('객체 people이 홍길동과 20을 가진다', ()=>{
    expect(fn.people("홍길동",20)).toEqual({name:"홍길동", age:20})
})

// not을 사용해서 결과를 반대로 테스트 할 수 있다
// true/false에서 사용하는 !
test('객체 people이 홍길동과 20을 가진다', ()=>{
    expect(fn.people("홍길동",20)).not.toStrictEqual({name:"홍길동", age:20})
})

// 소수끼리의 계산에서 사용하는 매처
// toBeCloseTo()
test('0.1과 0.2의 덧셈 toBe', ()=>{
    expect(0.1+0.2).toBe(0.3);
})
test('0.1과 0.2의 덧셈 toBeCloseTo', ()=>{
    expect(0.1+0.2).toBeCloseTo(0.3);
})


// 문자열에서 정규표현식을 통해서 확인할수 있다
// toMatch() 
// /홍/ 과 같은 정규식 규칙과, "홍"과 같은 문자열로 찾을 수 있다
test('홍 이라는 글자가 들어간다', () => { 
    expect("홍길동").toMatch("홍");
 })

// 배열 안의 값을 찾을 때 toContain 사용
test('배열안에 숫자 1이 들어있다', () => {
    expect([1,2,3]).toContain(1);
});

// 오류있는 함수 확인
// toThrow(Error), toThrow() 를 통해서 오류가 있다는 것을 확인
// 반대로 오류가 없다는 것을 확인할때는 not을 붙인다
test('name값이 없을 때 오류', () => {
    expect(()=>fn.makeError()).toThrow(Error);
 })