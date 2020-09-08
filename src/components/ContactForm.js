import React, { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'


export default function NewContactForm({ form, onChange, onSubmit }) {

    return (
        <>
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 20,
                }}
                layout="horizontal"
                onFinish={onSubmit}
                form={form}
            >
                <Form.Item
                    label="Firstname"
                    name="firstname"
                    rules={[{ required: true, message: 'Please type your firstname' }]}
                >
                    <Input name="firstname" placeholder="Enter firstname" />
                </Form.Item>
                <Form.Item
                    label="Lastname"
                    name="lastname"
                    rules={[{ required: true, message: 'Please type your lastname' }]}
                >
                    <Input name="lastname" placeholder="Enter lastname" />
                </Form.Item>
                <Form.Item
                    label="Phone number"
                    name="phonenumber"
                    wrapperCol={{ span: 8, }}
                    rules={[
                        { required: true, message: 'Please type your phonenumber' }
                    ]}
                >
                    <Input name="phonenumber" placeholder="Enter phonenumber" />
                </Form.Item >
                <Form.Item
                    style={{ marginLeft: '120px', }}>
                    <Button
                        type="primary"
                        htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}