// 제목, 내용을 입력받고, note를 추가해주는 addForm (멍청한) 컴포넌트
// 상태요소X, 그저 props로 전달받은 요소들에 의존해 뷰를 생성

import React from "react";
import { Card, Button, Typography, Input } from "antd"; // ant-design에서 제공하는 컴포넌트 사용하기 위한 호출
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons"; // 아이콘 불러오기

const { TextArea } = Input;

const addForm = (props) => {
    return(
        <Card
            key="addForm"
            id="addForm"
            title={
                <Input
                    required
                    value={props.inputTitle}
                    placeholder="제목을 입력하세요."
                    style={{width: "60%" }}
                    onChange={props.onChangeTitle}
                ></Input>
            }
            extra={
                <Button type="primary" onClick={props.onSubmit}>
                    {<PlusOutlined />}
                </Button>
            }
        >
            <TextArea
                placeholder="내용을 입력하세요."
                rows={3}
                onChange={props.onChangeContent}
                value={props.inputContent}
            ></TextArea>
        </Card>
    );
};

export default addForm;