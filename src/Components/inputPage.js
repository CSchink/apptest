import React from 'react';
import {MDBContainer, MDBBtn } from 'mdbreact';

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
            <MDBContainer>
            <div className="form-group">
                <label htmlFor="exampleInput">Date</label>
                <input type="text"
                name='date'
                placeholder='date' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">Entry</label>
            <input type="text"
                name='entry'
                placeholder='entry' 
                value={this.state.entry} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group"> 
            <label htmlFor="exampleInput">Century</label>
            <input type="text"
                name='century'
                placeholder='century' 
                value={this.state.century} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">Event</label>
            <input type="text"    
                name='event'
                placeholder='event' 
                value={this.state.event} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">SOTT Category</label>
            <input type="text"    
                name='category'
                placeholder='category' 
                value={this.state.category} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">Originating</label>
            <input type="text"    
                name='originating'
                placeholder='originating' 
                value={this.state.originating} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">Target</label>
            <input type="text"    
                name='target'
                placeholder='target' 
                value={this.state.target} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">Source</label>
            <input type="text"    
                name='source'
                placeholder='source' 
                value={this.state.source} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">Page</label>
            <input type="text"    
                name='page'
                placeholder='page' 
                value={this.state.page} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
            />
            </div>
            <MDBBtn color="primary">Enter</MDBBtn>
            </MDBContainer>
        )
    }
}

export default InputPage;