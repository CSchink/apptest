import React from 'react';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class InputPage extends React.Component {
    state={
        date:'',
        entry:'',
        century:'',
        event:'',
        category:'',
        originating:'',
        target:'',
        source:'',
        page:'',
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form>
                <TextField 
                name='date'
                placeholder='date' 
                value={this.state.date} 
                onChange={e => this.change(e)}
                />
                <TextField
                name='entry'
                placeholder='entry' 
                value={this.state.entry} 
                onChange={e => this.change(e)}
                />
                <TextField 
                name='century'
                placeholder='century' 
                value={this.state.date} 
                onChange={e => this.change(e)}
                />
                <TextField 
                name='event'
                placeholder='event' 
                value={this.state.date} 
                onChange={e => this.change(e)}
                />
                 <TextField 
                name='category'
                placeholder='category' 
                value={this.state.date} 
                onChange={e => this.change(e)}
                />
                <TextField 
                name='originating'
                placeholder='originating' 
                value={this.state.date} 
                onChange={e => this.change(e)}
                />
                <TextField 
                name='target'
                placeholder='target' 
                value={this.state.date} 
                onChange={e => this.change(e)}
                />
                <TextField 
                name='source'
                placeholder='source' 
                value={this.state.date} 
                onChange={e => this.change(e)}
                />
                <TextField 
                name='page'
                placeholder='page' 
                value={this.state.date} 
                onChange={e => this.change(e)}
                />
                 <RaisedButton label="Submit"/>
            </form>
        )
    }
}

export default InputPage;