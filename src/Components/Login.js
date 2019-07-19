import React from 'react';
import { Button, Input } from 'antd';

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
            <div>
                <Input 
                    name='email'
                    placeholder='Email'
                    onChange={e => this.onChange(e)}
                    value={this.state.email}
                />
                <Input 
                    name='password'
                    placeholder='Password'
                    onChange={e => this.onChange(e)}
                    value={this.state.password}
                />
                <Button/>
            </div>
        )
    }
   
}

export default Login;