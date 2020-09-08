import React from 'react'
import { Result, Button } from 'antd';
import { Link } from 'wouter';

let NotFound = ({ error }) => {
    return (
        <Result
            status="404"
            title={error.status}
            subTitle={error.statusText}
            extra={
                <Link href={`/`} >
                    <Button type="primary" >Back Home</Button>
                </Link>
            }
        />
    )
}

export default NotFound
