// render : 컴포넌트를 실행시키는 함수
// screen : 렌더이후에 화면에출력되는 html 엘리멘트를 가져오는 객체
// >> render를 통해서 가져와 쓸수 도 있다 
//  ex) const {getByText} = render(컴포넌트)
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// count=0  인지 확인
test('App에서 CountView가 count:0 확인', () => {
  render(<App />);
  // Text를 통해서 값이 제대로 들어갔는지 확인
  const view = screen.getByText('현재숫자 :0');
  expect(view).toBeInTheDocument();
});

// 증가버튼을 눌렀을때 값이 증가하는지
it('App에서 증가버튼을 눌렀을때 값이 바뀌는지 ', () => {
  render(<App />)
  // 증가버튼
  const incrementBtn = screen.getByTestId('incrementBtn');

  // 이벤트 실행후 증가값확인
  fireEvent.click(incrementBtn);
  fireEvent.click(incrementBtn);

  const changeState = screen.getByText('현재숫자 :2');
  expect(changeState).toBeInTheDocument();
});

// 감소버튼을 눌렀을때 값이 감소하는지
// 직접연습
