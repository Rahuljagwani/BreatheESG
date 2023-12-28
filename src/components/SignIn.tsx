import { Button, Form, Input, Typography } from 'antd';
import GoogleButton from 'react-google-button';
import { googleSignIn, signIn } from '../auth/Register';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setUser } from '../store/reducers/user';
import { useNavigate } from 'react-router';
import { RegisterProp } from '../@d.types';

const SignInBox: React.FC<RegisterProp> = ({setRegister}: RegisterProp) => {
    const { Link, Title, Paragraph } = Typography;
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    type FieldType = {
        email: string;
        password: string;
    };

    const onFinish = async (values: FieldType) => {
        console.log("Success:", values);
        const user = await signIn(values.email, values.password);
        await user?.getIdToken()
            .then((token) => {
                dispatch(setUser({ email: user.email as string, token: token }))
            });
        navigate('/user/dm');
    };

    const handleGoogleSignIn = async (e: React.MouseEvent) => {
        const user = await googleSignIn();
        await user?.getIdToken()
            .then((token) => {
                dispatch(setUser({ email: user.email as string, token: token }))
            });
        navigate('/user/dm');
    }

    const handleRegister = (e: React.MouseEvent) => {
        setRegister(0);
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Form
            form={form}
            name="signin"
            autoComplete="off"
            style={{ padding: "40px", maxWidth: 350, display: "flex", flexDirection: "column", justifyContent: "center" }}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Title level={3}>Login</Title>
            <Paragraph>Enter your Registered Email Id to continue</Paragraph>
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

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button size="large" type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

            <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <Link onClick={handleRegister}>New user? Sign Up</Link> or sign in with Google
                <GoogleButton
                    onClick={handleGoogleSignIn}
                />
            </Form.Item>

        </Form>
    );
}

export default SignInBox;
