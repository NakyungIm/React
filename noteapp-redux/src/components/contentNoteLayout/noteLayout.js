// note, addForm을 묶어 하나의 layout으로 구성하는 addForm (멍청한) 컴포넌트
import React from "react";
import Note from "./noteLayout.note";
import AddForm from "./noteLayout.addForm";
import { Layout } from "antd";

const noteLayout = ({
    inputTitle, inputContent, noteList, onChangeTitle, onChangeContent, onSubmit, onRemove,
}) => {
    const notes = noteList.map((n) => (
        <Note
            key = {n.id}
            title = {n.title}
            content = {n.content}
            id = {n.id}
            onRemove = {() => onRemove(n.id)}
        />
    ));

    return (
        <Layout>
            <AddForm
                inputTitle={inputTitle}
                inputContent={inputContent}
                onChangeTitle={onChangeTitle}
                onChangeContent={onChangeContent}
                onSubmit={onSubmit}
            ></AddForm>
            <div>{notes}</div>
        </Layout>
    );
};

export default noteLayout;