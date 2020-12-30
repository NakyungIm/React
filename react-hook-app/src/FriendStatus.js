//이번 커밋에서는 무시해도 되는 파일

import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status){
        setIsOnline(status.isOnline);
    }

    //componentDidMount, componentDidUpdate와 비슷
    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    });

    if(isOnline === null){
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
    
}

export default FriendStatus;
