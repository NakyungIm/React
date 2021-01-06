import React, { Component } from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    } // 초기 state 지정

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        ) // 타이머 설정(timerID 저장)
    } // 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행

    componentWillUnmount(){
        clearInterval(this.timerID);
    } // 타이머 분해

    tick() {
        this.setState({
            date: new Date()
        }); // setState는 컴포넌트 로컬 state 업데이트
    } // Clock 컴포넌트가 매초 작동하도록 하는 메서드

    render(){
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;