import {fireEvent, render, screen} from "@testing-library/react"
import Counter from "../components/Counter"

it('Counter 컴포넌트의 숫자값 확인', () => {
    render(<Counter />)
    const view = screen.getByText("0");
    //둘 중 아무거나 가능
    expect(view).toBeInTheDocument();
    expect(view).toBeTruthy();
});

it('Counter 컴포넌트의 증가버튼 실행 확인', () => {
    render(<Counter />)
    const incrementBtn = screen.getByTestId('incrementBtn');

    //이벤트 실행하기위함 함수 fireEvent
    fireEvent.click(incrementBtn)

    const changeState = screen.getByText("1");
    expect(changeState).toBeTruthy();
});

it('Counter 컴포넌트의 감소버튼 실행 확인', () => {
    render(<Counter />)
    const decrementBtn = screen.getByTestId('decrementBtn');

    //이벤트 실행하기위함 함수 fireEvent
    fireEvent.click(decrementBtn)
    fireEvent.click(decrementBtn)

    const changeState = screen.getByText("-2");
    expect(changeState).toBeTruthy();
});