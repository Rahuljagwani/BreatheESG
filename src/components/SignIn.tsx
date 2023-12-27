import { Button, Form, Input } from 'antd';
import GoogleButton from 'react-google-button';

const SignInBox = () => {
    const [form] = Form.useForm();
    type FieldType = {
        email?: string;
        password?: string;
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
            name="signin"
            autoComplete="off"
            style={{ padding: "40px"  ,maxWidth: 350, display:"flex", flexDirection:"column", justifyContent:"center" }}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[{ required: true, type: 'email', message: 'Please input valid email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType> label="Password" name="password" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item style={{display: "flex", justifyContent:"center"}}>
                <GoogleButton
                    onClick={() => { console.log('Google button clicked') }}
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button size="large" type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default SignInBox;
