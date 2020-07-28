import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Radio, Space, Button, Divider, Pagination, Steps, Checkbox, Row, Col  } from 'antd';
import FormComp from '../component/Form';
import './demo.css';
const { Step } = Steps
const CheckboxGroup = Checkbox.Group
const plainOptions = ['Apple', 'Pear', 'Orange']

const Demo = () => {
    const [size, setSize] = useState('small')
    const [current, setCurrent]= useState(1)
    const [checkedList, setCheckedList] = useState(['Apple', 'Pear'])
    const [indeterminate, setIndeterminate] = useState(false)
    const [checkAll, setCheckAll] = useState(false)
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize)
    }
    const handleStep = () => {
        setCurrent(current + 1)
    }
    const handleCheckbox = (e) => {
        console.log(`checked = ${e.target.checked}`)
    }
    const handleCheckAllChange = (e) => {
        const checked = e.target.checked
        setCheckAll(checked)
        setCheckedList(checked ? plainOptions : [])
        setIndeterminate(false)

    }
    const handleCheckChange = (checklist) => {
        setCheckedList(checklist)
        setIndeterminate(!!checklist.length && checklist.length < plainOptions.length)
        setCheckAll(checklist.length === plainOptions.length)

    }
    return (
        <div className="demo-wrapper">
            {/* 图标使用 */}
            <DownloadOutlined/>
           <Divider plain>Radio</Divider>
           <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="middle">Middle</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <div></div>
            <Divider plain>分页</Divider>
            <Pagination defaultCurrent={1} total={50}  showSizeChanger onShowSizeChange={onShowSizeChange}/>
            <Divider plain>步骤条</Divider>
            {/* <Button onClick={handleStep} type="primary">改变步骤条</Button> */}
            <Steps current={current} size="small" direction="vertical">
                <Step title="Finished" description="this is a description"/>
                <Step title="In Progress" description="this is a description"/>
                <Step title="Wationg" description="this is a description"/>
            </Steps>
            <Divider plain>多选框</Divider>
            <Checkbox onChange={handleCheckbox} defaultChecked={false} disabled>Checkbox</Checkbox>
            <Row>
                <Col span={24}>
                    <Checkbox 
                        indeterminate={indeterminate}
                        onChange={handleCheckAllChange}
                        checked={checkAll}>
                        Check all
                    </Checkbox>
                </Col>
            </Row>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={handleCheckChange}/>
            <Divider plain>表单</Divider>
            <FormComp></FormComp>


        </div>
    )
}

export default Demo