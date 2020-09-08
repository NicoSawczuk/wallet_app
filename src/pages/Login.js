import React, {useEffect} from 'react'
import { Form, Input, Button, Alert } from 'antd';
import { message } from 'antd'
import useUser from './../hooks/useUser';


export default function Login() {

    const { login, error, errorMessage } = useUser();

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 10 },
    };
    const tailLayout = {
        wrapperCol: { offset: 10, span: 10 },
    };

    const onFinish = values => {
        login(values)
    };

    useEffect(function () {
        if (error){
            message.error(errorMessage)
        }
    }, [error])

    return (
        <div className="container mt-1">
            <div className="row text-center">
                <div className="col-md-12 m-t-md">
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
                </div>
            </div>
        </div>
    );

}
