import React  from 'react';
import { Form, Input, Checkbox, Button, Select, Divider} from 'antd'
import { MinusCircleOutlined, PlusOutlined} from '@ant-design/icons'
const { Option} = Select
const layout = {
    labelCol: { span: 6},
    wrapperCol: { span: 10}
}
const tailLayout = {
    wrapperCol: { offset: 6, span: 10}
}
export default () => {
    const [form] = Form.useForm();
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const onGenderChange = (value) => {
        switch (value) {
            case 'female':
                form.setFieldsValue({username: '张三'})
            break;
        }
    }
    const handleUpdate = (prevValues, currentValues) => {
        return prevValues.gender !== currentValues.gender
    }
    const onRest = () => {
        form.resetFields()
    }
    const onFill = () => {
        form.setFieldsValue({
            username: '张盼盼',
            gender: 'male'
        })
    }
    // ------------------------------ 动态增减表单 -----------------------------
    const handleFinish = values => {
        console.log('Sucess:', values)
    }
    return (
        <>
            <Form 
                {...layout} 
                name="basic"
                form={form} 
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item 
                    label="Username"
                    name="username"
                    rules={[{required:true, message: "please input your username!"}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[{required: true}]}>
                    <Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item noStyle
                    shouldUpdate={handleUpdate}>
                    {
                        ({ getFieldValue }) => {
                            return getFieldValue('gender') === 'other' ? (
                                <Form.Item name="customizeGender" label="customizeGender" rules={[{required: true}]}>
                                    <Input/>
                                </Form.Item>
                            ): null;
                        }
                    }
                </Form.Item>
                <Form.Item {...tailLayout}>
                    {/* <Button type="primary" htmlType="submit">Submit</Button>
                    <Button htmlType="button" onClick={onRest} >Reset</Button>
                    <Button type="link" htmlType="button" onClick={onFill}>Fill form</Button> */}
                </Form.Item>
            </Form>
            <Divider plain>动态增减表单</Divider>
            <Form name="dynamic_form_item" {...layout} onFinish={handleFinish}>
                <Form.List name="names">
                    {
                        (fields, { add, remove}) => {
                            return (
                                <div>
                                    {
                                        fields.map((field, index) => (
                                            <Form.Item
                                                {...(index === 0 ? layout : tailLayout)}
                                                required={false} 
                                                key={field.key} 
                                                label={index === 0 ? 'Passengers':''}>
                                                    <Form.Item 
                                                        {...field}
                                                        validateTrigger={['onChange', 'onBlur']}
                                                        rules={[{
                                                            required: true,
                                                            whitespace: true,
                                                            message: "Please input "
                                                        }]}>

                                                    </Form.Item>
                                            </Form.Item>
                                        ))
                                    }
                                </div>
                            )
                        }
                    }
                </Form.List>
            </Form>

        </>
    )
}