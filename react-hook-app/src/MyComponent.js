import React, { useState, useEffect} from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);

    //componentDidMount, componentDidUpdate와 비슷
    useEffect(() => {
        // 브라우저 API를 이용해 문서 타이틀을 업데이트
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You click {count} times </p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default MyComponent;
