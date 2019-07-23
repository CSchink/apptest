import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import JumbotronPage from './jumbotron';


class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div><JumbotronPage />
        <div style={{  margin: "30px auto", boxSizing: "border-box", width: "500px", minHeight: "200px", alignItem: 'center', padding: "20px 20px"}}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <br />
          <Button size ="large" type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <br />
          <a className="login-form-forgot" href="">
            Forgot password?
          </a>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </div>
      </div>
    );
  }
}
const LoginForm = Form.create({ name: 'normal_login' })(Login);


export default LoginForm;