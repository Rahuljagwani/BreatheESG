import React from 'react';
import { Button, Form, Input, Modal, Select } from 'antd';
import { AssignmentDataType, InputModalProps } from '../@d.types';

const InputModal: React.FC<InputModalProps> = ({ open, closeModal }: InputModalProps) => {

    const [form] = Form.useForm();

    const onFinish = async (values: AssignmentDataType) => {
        console.log("Success:", values);
        closeModal();
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Modal
                title="Submit Assessment Data"
                open={open}
                footer={null}
                closeIcon={null}
            >

                <Form
                    form={form}
                    name="insert"
                    autoComplete="off"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item<AssignmentDataType>
                        label="Assessment Title"
                        name="assessment"
                        rules={[{ required: true, message: 'Assessment Title is Required' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<AssignmentDataType>
                        label="Type"
                        name="type"
                    >
                        <Select
                            defaultValue="Custom"
                            options={[
                                { value: 'Custom', label: 'Custom' },
                                { value: 'BRSR', label: 'BRSR' }
                            ]}
                        />
                    </Form.Item>

                    <Form.Item<AssignmentDataType>
                        label="Number of Suppliers"
                        name="nos"
                        rules={[{ required: true, pattern: new RegExp(/^[0-9]+$/) ,message: 'Number of Suppliers is required' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<AssignmentDataType>
                        label="Risk Classification"
                        name="rc"
                    >
                        <Select
                            defaultValue="Medium"
                            options={[
                                { value: 'Medium', label: 'Medium' },
                                { value: 'Low', label: 'Low' },
                                { value: 'High', label: 'High' }
                            ]}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button className='modalButton' size="large" htmlType="submit">
                            Submit
                        </Button>
                        <Button className='modalButton' size="large" onClick={closeModal}>
                            Close
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default InputModal;