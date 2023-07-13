// CountView의 내용을 테스트
import {render, screen} from '@testing-library/react'
import CountView from "../components/CountView";

// it 을 통해서 test할 내용 작성
// props 값을 적었을때, 그 값이 들어간 text를가진 HTML확인 
it('CountView의 props값에 따른 화면의 글자확인', () => {
    // 컴포넌트 실행
    render(<CountView count={5} />)
    // 글자값이 있는지 가져옴 : html/null
    const initalState = screen.queryByText('현재숫자 :5');
    // 안에 값이 있으면 truthy 참
    // 값이 없으면(null) 거짓 
    expect(initalState).toBeTruthy()
});