import React from 'react';
import { Input, Button, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
import JumbotronPage from './jumbotron';
const { TextArea } = Input;
const InputGroup = Input.Group;
const { Option, OptGroup } = AutoComplete;

  
class InputPage extends React.Component {
    
    constructor() {
        super();
        this.state={
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
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //    handleChange = value => {
    //     this.state.dataSource.forEach((item) => {
    //         !value || value.indexOf()
    //         ? []
    //         : ['${value}']
    //    })
    // }

    render() {
        
        const targetData = [
            "United States",
            "England",
            "Russia",
            "China",
            "Thailand"
        ]
        const sourceData = [
            "Sott.net",
        ]
        const originatingData = [
            "United States",
            "England",
            "Russia",
            "China",
            "Thailand"
        ]        
        const eventData = 
         [
            "Capitalism",
            "Revolution",
            "Banking",
            "Colonization",
            "Communism",
            "Christianity",
            "Coup D'etat",
            "Balkans Conflict",
            "Dionysus Syndrome",
            "Elections",
            "Energy Crisis",
            "Greek Religion",
            "Ice Age",
            "Evolution",
            "International Finance",
            "Judaism",
            "Jung",
            "Korean War"
         ]
       
        const Categories = [
            "Myth and Religion",
            "Science",
            "Military",
            "Climate",
            "Health",
            "Politics",
            "Economics",
            "Technology"
        ]

    return (
        <div>
            <JumbotronPage text="History Database - Data Entry" color='#4287f5' />
        <div style={{margin: "30px auto", 
            boxSizing: "border-box", 
            width: "600px", 
            minHeight: "200px", 
            alignItem: 'center', 
            padding: "10px 20px"}}>
                <p>Reminder that all fields are required</p>
                <InputGroup compact>
                    <Input style={{ width: '50%' }} placeholder="Century" 
                            type="text"
                            name='century'
                            value={this.state.century} 
                            onChange={e => this.change(e)}/>
                    <DatePicker style={{ width: '50%' }}  value={this.state.date} 
                            onChange={e => this.change(e)} />
                 </InputGroup>
            <br />
                <InputGroup compact>
                    <AutoComplete
                        dataSource={Categories}
                        style={{ width: '50%' }}
                        onChange={this.handleChange}
                        placeholder="Category"
                        filterOption={(inputValue, option) =>
                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />
                    <AutoComplete
                        className="certain-category-search"
                        dataSource={eventData}
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={false}
                        style={{ width: '50%' }}
                        // onChange={this.handleChange}
                        filterOption={(inputValue, option) =>
                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                        placeholder="Event"
                    />
                </InputGroup>
            <br />
                <InputGroup compact>
                    <AutoComplete
                        className="certain-category-search"
                        dataSource={originatingData}
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={false}
                        style={{ width: '50%' }}
                        // onChange={this.handleChange}
                        filterOption={(inputValue, option) =>
                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                        placeholder="Originating"
                    />
                    <AutoComplete
                        className="certain-category-search"
                        dataSource={targetData}
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={false}
                        style={{ width: '50%' }}
                        // onChange={this.handleChange}
                        filterOption={(inputValue, option) =>
                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                        placeholder="Target"
                    />
                </InputGroup>
            <br />
                <InputGroup compact>
                    <AutoComplete
                        className="certain-category-search"
                        dataSource={sourceData}
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={false}
                        style={{ width: '100%' }}
                        // onChange={this.handleChange}
                        filterOption={(inputValue, option) =>
                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                        placeholder="Source"
                    />
                </InputGroup>
            <br />
                <InputGroup compact>
                    <Input style={{ width: '50%' }} placeholder="Page" />
                </InputGroup>
            <br />
                    <TextArea
                        placeholder="Entry"
                        autosize={{ minRows: 2, maxRows: 8 }} 
                        type="text"    
                        name='event'
                        value={this.state.event} 
                        onChange={e => this.change(e)}
                        />
            <br />
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
            <Button type="primary" block>Submit</Button>
            </div>
            </div>
        )
    }
}

export default InputPage;