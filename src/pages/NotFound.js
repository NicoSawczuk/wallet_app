import React from 'react'
import { Result, Button } from 'antd';
import { Link } from 'wouter';

let NotFound = () => {
    return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={
                <Link href={`/`} >
                    <Button type="primary" >Back Home</Button>
                </Link>
            }
        />
    )
}

export default NotFound
