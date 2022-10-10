import React from 'react';
import { Form, Row, Col, Button, Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

const TodoForm = ({ onFormSubmit }) => {
    const [form] = Form.useForm();

    const onFinish = () => {
        onFormSubmit({
            title: form.getFieldValue('title'),
            completed: false

        });
        console.log(form.getFieldValue('title'));

        form.resetFields();
    }

    return (
        <Form
            form={form}
            onFinish={onFinish}
            layout="horizontal"
            className="todo-form">
            <Row gutter={20}>
                <Col xs={25} sm={25} md={18} lg={20} xl={21}>
                    <Form.Item
                        name={'title'}
                        rules={[{required: true, message: 'This field is required'}]}>
                        <Input placeholder="What needs to be done?"/>
                    </Form.Item>
                </Col>
                <Col xs={25} sm={25} md={8} lg={6} xl={5}>
                    <Button type="primary" htmlType="submit" block>
                        <PlusCircleFilled />
                        Add Todo
                    </Button>
                </Col>
            </Row>

        </Form>
    )
}

export default TodoForm;