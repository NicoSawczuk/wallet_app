import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Card } from 'antd';
import { message } from 'antd'
import useUser from './../hooks/useUser';
import Loading from 'components/Loading'

export default function Login() {
    const gridStyle = {
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
    };
    const { login, error, errorMessage } = useUser();

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 10 },
    };
    const tailLayout = {
        wrapperCol: { offset: 10, span: 10 },
    };
    const [loading, setLoading] = useState(false)

    const onFinish = values => {
        setLoading(true)
        login(values)
    };

    useEffect(function () {
        if (error) {
            message.error(errorMessage)
        }
    }, [error])

    return (
        <>
            {loading ? <Loading />
                :
                <div className="container">
                    <div className="m-t-md">
                        <Card
                            title="Login"
                            style={gridStyle}
                            bordered={false}
                            size="small">
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name={'email'}
                                    label="Email"
                                    rules={[
                                        {
                                            type: 'email',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your email!'
                                        }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item> */}

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                            </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </div>
                </div>}
        </>
    );

}
