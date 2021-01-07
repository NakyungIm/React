const INCREMENT = 'const/INCREMENT'; // 액션타입
const DECREMENT = 'const/DECREMENT';

export const increment = () => ({ type: INCREMENT }); // 액션생성함수
export const decrement = () => ({ type: DECREMENT });

const initialState = 0; // 초기상태

const counter = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
} // 리듀서

export default counter;