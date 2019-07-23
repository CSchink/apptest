import React from 'react';
import {MDBContainer, MDBBtn } from 'mdbreact';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';

const { TextArea } = Input;
const InputGroup = Input.Group;

  
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
            <div style={{margin: "30px auto", boxSizing: "border-box", width: "500px", minHeight: "200px", alignItem: 'center', padding: "10px 20px"}}>
            <InputGroup compact>
          <Input style={{ width: '50%' }} placeholder="century" 
                type="text"
                name='century'
                value={this.state.century} 
                onChange={e => this.change(e)}/>
          <DatePicker style={{ width: '50%' }}  value={this.state.date} 
                onChange={e => this.change(e)} />
        </InputGroup>
        <br />
        <TextArea
            placeholder="Entry"
            autosize 
            type="text"    
            name='event'
            value={this.state.event} 
            onChange={e => this.change(e)}
            />
        <br />
        <br />
        <InputGroup compact>
        <Input style={{ width: '50%' }} placeholder="SOTT Category" />
        <Input style={{ width: '50%' }} placeholder="Event / Line of Force" />
        </InputGroup>
        <br />
            {/* <div className="form-group">
                <label htmlFor="exampleInput">Date</label>
                <input type="text"
                name='date'
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">Entry</label>
            <input type="text"
                name='entry'
                value={this.state.entry} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group"> 
            <label htmlFor="exampleInput">Century</label>
            <input type="text"
                name='century'
                value={this.state.century} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">Event</label>
            <TextArea
            placeholder="Autosize height with minimum and maximum number of lines"
            autosize={{ minRows: 2, maxRows: 6 }}
            type="text"    
                name='event'
                value={this.state.event} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
            /></div>
            <div className="form-group">
            <label htmlFor="exampleInput">SOTT Category</label>
            <input type="text"    
                name='category'
                value={this.state.category} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">Originating</label>
            <input type="text"    
                name='originating'
                value={this.state.originating} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">Target</label>
            <input type="text"    
                name='target'
                value={this.state.target} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">Source</label>
            <input type="text"    
                name='source'
                value={this.state.source} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput">Page</label>
            <input type="text"    
                name='page'
                value={this.state.page} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
            />
            </div> */}
            <MDBBtn color="primary">Enter</MDBBtn>
            </div>
        )
    }
}

export default InputPage;