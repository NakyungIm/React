import React, {useState} from 'react';

function MyComponent() {
    // "count"라는 새 상태 변수 선언
    const[count, setCount] = useState(0);

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