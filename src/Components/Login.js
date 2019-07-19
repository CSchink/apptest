import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <Form>
                <Form.Item>
                <Input 
                    name='email'
                    placeholder='Email'
                    onChange={e => this.onChange(e)}
                    value={this.state.email}
                />
                </Form.Item>
                <Form.Item>
                <Input 
                    name='password'
                    placeholder='Password'
                    onChange={e => this.onChange(e)}
                    value={this.state.password}
                />
                </Form.Item>
                <Button/>
            </Form>
        )
    }
   
}

export default Login;