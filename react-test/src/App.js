import logo from './logo.svg';
import './App.css';
import CheckboxWithLabel from './components/CheckboxWithLabel';
import CountView from './components/CountView';

function App() {
  return (
    <div className="App">
      {/** Test를 사용하지 않았을때, 화면에 바로 출력해서 확인 */}
      <CheckboxWithLabel labelOn="On" labelOff="Off"  />

      {/**작성한 내용을 화면에 출력해서 확인 */}
      <CountView count={5} />
    </div>
  );
}

export default App;
