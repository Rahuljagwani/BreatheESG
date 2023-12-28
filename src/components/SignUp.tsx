import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { signUp } from '../auth/Register';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router';
import { setUser } from '../store/reducers/user';
import { RegisterProp } from '../@d.types';

const SignUpBox: React.FC<RegisterProp> = ({ setRegister }: RegisterProp) => {
    const [form] = Form.useForm();
    const { Title, Link } = Typography;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    type FieldType = {
        email: string;
        password: string;
        password2?: string;
    };
    const onFinish = async (values: FieldType) => {
        console.log("Success:", values);
        const user = await signUp(values.email, values.password);
        await user?.getIdToken()
            .then((token) => {
                dispatch(setUser({ email: user.email as string, token: token }))
            });
        navigate('/user');
    };

    const handleRegister = (e: React.MouseEvent) => {
        setRegister(1);
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Form
            form={form}
            name="signup"
            autoComplete="off"
            style={{ padding: "40px", maxWidth: 350, display: "flex", flexDirection: "column", justifyContent: "center" }}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Title level={3}>Sign Up</Title>
            <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[{ required: true, type: 'email', message: 'Please input valid email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType> label="Password" name="password" rules={[{ required: true }]}>
                <Input.Password />
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
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button size="large" type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

            <Form.Item style={{ display: "flex", justifyContent: "center" }}>
                <Link onClick={handleRegister}>Alreaady registered user? Sign In</Link>
            </Form.Item>
        </Form>
    );
};

export default SignUpBox;