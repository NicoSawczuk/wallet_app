import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
    return (
        <div style={{position: "absolute", top: "50%", left: "50%"}}>
            <Spin size="large" />
        </div>
    )


}

export default Loading