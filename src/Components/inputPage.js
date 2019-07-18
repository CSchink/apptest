import React from 'react';
import {MDBContainer, MDBBtn, MDBInputGroup } from 'mdbreact';

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
            <MDBInputGroup containerClassName="mb-3" hint="Username" 
                name='date'
                placeholder='date' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            <MDBInputGroup containerClassName="mb-3" hint="Entry"
                type="text"
                name='entry'
                placeholder='entry' 
                value={this.state.entry} 
                className="form-control form-control-lg"
                onChange={e => this.change(e)}
                type="textarea" 
                />
            <div className="form-group"> 
            <MDBInputGroup containerClassName="mb-3" hint="Century"
            type="text"
                name='century'
                placeholder='century' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <MDBInputGroup containerClassName="mb-3" hint="Event"
            type="text"    
                name='event'
                placeholder='event' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <MDBInputGroup containerClassName="mb-3" hint="Category"
            type="text"    
                name='category'
                placeholder='category' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <MDBInputGroup containerClassName="mb-3" hint="Originating"
            type="text"    
                name='originating'
                placeholder='originating' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <MDBInputGroup containerClassName="mb-3" hint="Target"
                type="text"    
                name='target'
                placeholder='target' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <MDBInputGroup containerClassName="mb-3" hint="Source"
            type="text"    
                name='source'
                placeholder='source' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <MDBInputGroup containerClassName="mb-3" hint="Page"
                type="text"    
                name='page'
                placeholder='page' 
                value={this.state.date} 
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