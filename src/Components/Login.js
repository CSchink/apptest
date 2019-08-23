import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import JumbotronPage from './jumbotron';
import axios from 'axios';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: ''
        }
    }
    
    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }

    onSubmit = (event) => {
    event.preventDefault();
    fetch('/.netlify/functions/authenticate', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (res.status === 200) {
        this.props.history.push('/');
        } else {
        const error = new Error(res.error);
        throw error;
        }
    })
    .catch(err => {
        console.error(err);
        alert('Incorrect username or password');
    });
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
          <div><JumbotronPage text="Global History Database - Login" />
          <div style={{  margin: "30px auto", boxSizing: "border-box", width: "500px", minHeight: "200px", alignItem: 'center', padding: "10px 20px"}}>
              <p>Please sign in below</p>
        <Form onSubmit={this.onSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                value={this.state.user}
                onChange={this.handleInputChange}
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
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleInputChange}
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
            <a className="login-form-forgot">
              Forgot password?
            </a> <br />
            <a href="">Register now!</a>
          </Form.Item>
        </Form>
        </div>
        </div>
      );
    }
   }
   const LoginForm = Form.create({ name: 'normal_login' })(Login);
    
    
   export default LoginForm;