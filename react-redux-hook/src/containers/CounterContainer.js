import React from 'react';
import { useSelector } from 'react-redux'; // 리덕스 스토어 상태 접근
import Counter from '../components/Counter';

const CounterContainer = () => {
    const counter = useSelector(state)
    return <Counter />;
};

export default CounterContainer;