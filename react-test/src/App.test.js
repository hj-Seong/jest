// render : 컴포넌트를 실행시키는 함수
// screen : 렌더이후에 화면에출력되는 html 엘리멘트를 가져오는 객체
// >> render를 통해서 가져와 쓸수 도 있다 
//  ex) const {getByText} = render(컴포넌트)
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //const linkElement = screen.getByText(/리액트 공부/i);
  //expect(linkElement).toBeInTheDocument();
});
