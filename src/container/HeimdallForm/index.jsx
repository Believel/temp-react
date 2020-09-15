import React from 'react'
import { createForm, formShape } from 'rc-form';
import { List, InputItem, Button, WhiteSpace } from "antd-mobile";
import "antd-mobile/lib/style/index"

class Form extends React.Component {
  static propTypes = {
    form: formShape,
  };

  submit = () => {
    console.log("提交")
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
    
  }
  rest = (e) => {
    e.preventDefault();
    console.log('重置')
    this.props.form.resetFields()
  }

  render() {
    let errors;
    const { getFieldProps } = this.props.form;
    return (
      <div>
       <List renderHeader={() => 'Customize to focus'}>
            <InputItem {...getFieldProps("name")} clear placeholder="请输入姓名">
                姓名
            </InputItem>
            <InputItem {...getFieldProps("title")} clear placeholder="请输入标题">
                标题
            </InputItem>
            <List.Item>
                <Button onClick={this.submit}>提交</Button><WhiteSpace/>
                <Button onClick={this.rest} type="warning">重置</Button>
            </List.Item>
       </List>
      </div>
    );
  }
}

export default createForm({
    onFieldsChange(_, changedFields, allFields) {
        console.log("onFieldsChange: ", changedFields, allFields)
    },
    onValuesChange(_, changedValues, allValues) {
        console.log("onValuesChange: ", changedValues, allValues);
    }
}
    
)(Form);