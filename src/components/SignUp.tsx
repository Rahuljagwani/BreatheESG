import React from 'react';
import { Alert, Button, Form, Input, Typography } from 'antd';

const SignUpBox: React.FC = () => {
    const [form] = Form.useForm();
    type FieldType = {
        email?: string;
        password?: string;
        password2?: string;
    };
    const onFinish = (values: FieldType) => {
        console.log("Success:", values);
        //Can directly call props here
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
      };
    return (
        <Form
            form={form}
            name="signup"
            autoComplete="off"
            style={{ padding: "40px"  ,maxWidth: 350, display:"flex", flexDirection:"column", justifyContent:"center" }}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[{ required: true,type: 'email', message: 'Please input valid email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType> label="Password" name="password" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Confirm Password"
                name="password2"
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button size="large" type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignUpBox;