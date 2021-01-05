// 새롭게 생성되는 노트의 뷰를 담당하는 (멍청한) 컴포넌트
// 상태요소X, 그저 props로 전달받은 요소들에 의존해 뷰를 생성

import React from "react";
import { Card, Button, Typography } from "antd"; // ant-design에서 제공하는 컴포넌트 사용하기 위한 호출
import { DeleteOutlined } from "@ant-design/icons"; // 아이콘 불러오기

const { Paragraph } = Typography;

const note = (props) => {
    return (
        <Card
            hoverable="true"
            key={props.id}
            id={props.id}
            title={<h3>{props.title}</h3>}
            extra={
                <Button danger type="ghost" onClick={() => props.onRemove(props.id)}>
                    {<DeleteOutlined />}
                </Button>
            }
        >
            <Paragraph>{props.content}</Paragraph>
        </Card>
    );
};

export default note;