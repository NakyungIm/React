// 똑똑한 컴포넌트 ( 리덕스 스토어와 연결해주어야함 )
import React, { Component } from "react";
import { connect } from "react-redux"; // 스토어와 컨테이너를 연결시켜줌, react-redux 제공 함수
import { bindActionCreators } from "redux"; // 모듈에서 정의한 액션 생성자들을 묶어주는 함수
import * as noteActions from "../store/modules/note"; // 우리가 만들었던 노트 모듈의 액션 생성자들을 noteActions라는 이름으로 *(모두) 불러옴

import NoteLayout from "../components/contentNoteLayout/noteLayout"; // view역할을 하는 멍청한 컴포넌트 noteLayout 불러옴

class NoteListContainer extends Component {

    handleChangeTitle = (e) => {  // 추가 시작
        const { NoteActions } = this.props;
        NoteActions.changeInputTitle(e.target.value);
    };  // 추가 끝

    // 등록 이벤트
    handleSubmit = (e) => {
        e.preventDefault();
        const { NoteActions, inputTitle, inputContent} = this.props;
        NoteActions.addNote(inputTitle, inputContent);
        NoteActions.changeInputTitle("");
        NoteActions.changInputContent("");
    };

    // 삭제 이벤트
    handleRemove = (id) => {
        const { NoteActions} = this.props;
        NoteActions.removeNote(id);
    };

    render(){
        const { inputTitle, inputContent, noteList } = this.props;
        return(
            <NoteLayout
                inputTitle = {inputTitle}
                inputContent = {inputContent}
                noteList = {noteList}
                onChangeTitle = {this.handleChangeTitle}
                onChangeContent = {this.handleChangeContent}
                onSubmit = {this.handleSubmit}
                onRemove = {this.handleRemove}
            />
        );
    }
}

const mapStateToProps = ({ note }) => ({
    inputTitle: note.inputTitle, // 컨테이너에서 사용되는 inputTitle은 우리가 만든 노트 모듈에서 정의한 inputTitle이라는 상태 전달받음
    inputContent: note.inputContent,
    noteList: note.noteList,
}); // 스토어의 상태값을 불러와 props로 사용하기 위한 정의

const mapDispatchToProps = (dispatch) => ({
    NoteActions: bindActionCreators(noteActions, dispatch),
}); // 모듈에서 정의한 액션 생성함수들을 컨테이너에서 props로 사용하기 위한 작업
    // 노트 모듈에서 정의한 액션 생성함수들을 noteActions로 불러왔었음. 그 함수들을 NoteActions라는 이름으로 컨테이너의 props에 추가하는 과정임

export default connect(mapStateToProps, mapDispatchToProps)(NoteListContainer);