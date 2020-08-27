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
            >
                <Form.Item label="Firstname" rules={[{ required: true, message: 'Please type your firstname' }]}>
                    <Input name="firstname" value={form.firstname} onChange={onChange} />
                </Form.Item>
                <Form.Item label="Lastname" rules={[{ required: true, message: 'Please type your lastname' }]}>
                    <Input name="lastname" onChange={onChange} />
                </Form.Item>
                <Form.Item label="Phone number" wrapperCol={{ span: 8, }}>
                    <Input name="phonenumber" onChange={onChange} />
                </Form.Item >
                <Form.Item  style={{ marginLeft: '120px', }}>
                    <Button
                        type="primary" htmlType="submit">
                        Guardar
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}