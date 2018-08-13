import React from 'react';
import { Card, Form, Button, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, InputNumber } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Registers extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 20
      }
    }
    return(
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
            {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [
                    {
                      required: 'true',
                      message: '用户名称不能为空'
                    },
                    {
                      min: 5,
                      max: 10,
                      message: '长度不在范围内'
                    },
                    {
                      pattern: new RegExp('^\\w+$','g'),
                      message: '用户名必须为字母或者数字'
                    }
                  ]
                })(<Input placeholder="请输入用户名" />)
              }
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('userPwd', {
                  initialValue: '',
                  rules: [
                    {
                      required: 'true',
                      message: '密码不能为空'
                    }
                  ]
                })(<Input placeholder="请输入密码" />)
              }
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: '1'
                })(
                  <RadioGroup>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: 10
                })(
                  <InputNumber />
                )
              }
            </FormItem>
            <FormItem>
              
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(Registers);