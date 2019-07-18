import React from 'react';

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
        return(
            <form>
                <input 
                name='date'
                placeholder='date' 
                value={this.state.date} 
                onChange={e => this.change(e)}></input>
                  <input 
                name='entry'
                placeholder='entry' 
                value={this.state.entry} 
                onChange={e => this.change(e)}></input>
                   <input 
                name='century'
                placeholder='century' 
                value={this.state.date} 
                onChange={e => this.change(e)}></input>
                   <input 
                name='event'
                placeholder='event' 
                value={this.state.date} 
                onChange={e => this.change(e)}></input>
                   <input 
                name='category'
                placeholder='category' 
                value={this.state.date} 
                onChange={e => this.change(e)}></input>
                  <input 
                name='originating'
                placeholder='originating' 
                value={this.state.date} 
                onChange={e => this.change(e)}></input>
                  <input 
                name='target'
                placeholder='target' 
                value={this.state.date} 
                onChange={e => this.change(e)}></input>
                  <input 
                name='source'
                placeholder='source' 
                value={this.state.date} 
                onChange={e => this.change(e)}></input>
                  <input 
                name='page'
                placeholder='page' 
                value={this.state.date} 
                onChange={e => this.change(e)}></input>
            </form>
        )
    }
}

export default InputPage;