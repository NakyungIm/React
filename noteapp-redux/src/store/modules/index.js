import { combineReducers } from "redux";
import note from "./note";
// 모듈을 추가하고 싶다면, import하여 불러오기

export default combineReducers({
    note,
    // 모듈 추가 (다른 리듀서를 만들게 되면 이곳에 추가)
});