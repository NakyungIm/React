import { combineReducers } from "redux";
import note from "./note";

export default combineReducers({
  note,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
