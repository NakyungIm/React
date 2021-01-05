import { createAction, handleActions } from "redux-actions";
// createAction 모듈은 액션 생성 함수를 작성할 때 간결하고 가독성 좋게 작성할 수 있도록 도와주는 모듈
// 간결하고 가독성 좋게 작성 -> 어떤 규칙에 의해 작성됐을 때 보여지는 효과
// FSA(flux-standard-action) 규칙을 따름


// 액션 타입 정의
const INPUT_TITLE = "note/INPUT_TITLE"; // 노트의 제목의 입력값이 바뀔 때 발생하는 액션
const INPUT_CONTENT = "note/INPUT_CONTENT"; // 노트의 내용의 입력값이 바뀔 때 발생하는 액션
const ADD_NOTE ="note/ADD_NOTE"; // 작성한 노트를 리스트에 추가할 때 발생하는 액션
const REMOVE_NOTE = "note/REMOVE_NOTE"; // 리스트에서 특정 노트를 삭제할 때 발생하는 액션


// 액션 생성 함수
let id = 0;
export const changeInputTitle = createAction(INPUT_TITLE, (title) => title);
export const changeInputContent = createAction(INPUT_CONTENT, (content) => content);
export const addNote = createAction(ADD_NOTE, (title, content) => ({
    id: ++id, // 노트가 추가될 때마다 id값 1씩 증가 -> 노트마다 다른 key값을 가질 수 있도록 하기 위해 할당
    title,
    content,
}));
export const removeNote = createAction(REMOVE_NOTE, (id) => id);


// 초기 상태 정의 (store에 저장할 상태들의 초기값 정의, 초기상태는 하나의 객체로 생성)
const initialState = {
    inputTitle: "", // 입력으로 들어온 제목값 저장할 상태
    inputContent: "", // 입력으로 들어온 내용값 저장할 상태
    noteList: [
        {
            id: 0,
            title: "노트 제목",
            content: "노트 내용",
        },
    ], // (id, title, content)을 담고 있는 객체를 담을 배열 타입의 상태
};


// 리듀서 함수 정의 (== 액션 발생시키는 함수)
// redux-cations에서 제공하는 handleActions을 사용하여 작성
// handleActions 사용 시 기존 방식의 switch-case문 사용할 필요 x, 각 액션 타입마다 업데이트 함수를 구현하는 방식 -> 가독성 good!
export default handleActions(
    {
        [INPUT_TITLE]: (state, action) => ({
        ...state,
        inputTitle: action.payload,
        }), // 액션 생성 함수에서 title이라 정의한 파라미터를 payload 필드로 전달받아 상태값인 inputTitle에 넣어주는 로직
        [INPUT_CONTENT]: (state, action) => ({
            ...state,
            inputContent: action.payload,
        }), // 액션 생성 함수에서 content라 정의한 파라미터를 payload 필드로 전달받아 상태값인 inputContent에 넣어주는 로직
        [ADD_NOTE]: (state, action) => ({
            ...state,
            noteList: state.noteList.concat({
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
            }),
        }),
        [REMOVE_NOTE]: (state, action) => ({
            ...state,
            noteList: state.noteList.filter((note) => note.id !== action.payload),
        }),
    },
    initialState
);
// 리듀서 함수는 파라미터로 (현재 상태(state), 액션에서 사용할 요소(action))를 받음
// action의 필드는 payload로 통일되어 있음


/*
멍청한 컴포넌트 == presentational 컴포넌트 == 그저 props로 전달받은 값을 통해 뷰를 구성하는 컴포넌트 == 컴포넌트만의 상태요소가 없다
똑똑한 컴포넌트 == container 컴포넌트 == 큰 틀만 가지고 있는 레이아웃 : 복잡X, 상태요소 가지고 있음, 그 상태요소를 멍청한 컴포넌트에게 전달
*/