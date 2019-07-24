import React from 'react';
import { Input, Button, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
import JumbotronPage from './jumbotron';
import axios from 'axios';
const { TextArea } = Input;
const InputGroup = Input.Group;
const { Option, OptGroup } = AutoComplete;

  
class InputPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            data:'',
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
    
    componentDidMount() {
        axios.get('/.netlify/functions/getData')
        .then((response) => {this.setState({data: response.data})
        console.log(response.data)
     }) 
         .catch(error => {
             console.error(error)
           })
       }
      

    //    handleChange = value => {
    //     this.state.dataSource.forEach((item) => {
    //         !value || value.indexOf()
    //         ? []
    //         : ['${value}']
    //    })
    // }

    render() {
        
        // let data = []  
        // const sottData = this.state.dataSource.forEach((item) => {
        //       var arr=[item.Event]
        //       data.push(arr)
        // }
        // )
        // const dataSource = 
        //  [
        //     "Capitalism",
        //     "Revolution",
        //     "Banking",
        //     "Censorship and Surveillance",
        //     "Colonization",
        //     "Communism",
        //     "Christianity",
        //     "Coup D'etat",
        //     "Balkans Conflict",
        //     "Dionysus Syndrome",
        //     "Elections",
        //     "Energy Crisis",
        //     "Esoterica",
        //     "Evolution of Deep State",
        //     "Food Shortages",
        //     "Foundation of Israel",
        //     "Global Arms Trade",
        //     "Greek Religion",
        //     "Gun Control",
        //     "Ice Age",
        //     "ID vs Darwinian Evolution",
        //     "International Finance",
        //     "Iran Contra",
        //     "Iran Scare",
        //     "Islam",
        //     "Israel Lobby",
        //     "Israel-Palestine Conflict",
        //     "JFK Assassination",
        //     "Judaism",
        //     "Jung Cult",
        //     "Korean War",
        //     "Lead-up to World War I",
        //  ]
       
        const sottCategories = [
            "Puppet Masters",
            "Society's Child",
            "Earth Changes",
            "Fire in the Sky",
            "Health and Wellness",
            "Secret History",
            "Science of the Spirit",
            "Science and Technology"
        ]

        return (
            <div>
            <JumbotronPage text="SOTT Lab - Data Entry" />
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
            dataSource={sottCategories}
            style={{ width: '50%' }}
            onChange={this.handleChange}
            placeholder="SOTT Category"
            filterOption={(inputValue, option) =>
                option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
          />
        <AutoComplete
            className="certain-category-search"
            dataSource={this.state.data.forEach((item) => {
                let event=[]
                var arr=[item.Event]
                event.push(arr)
          }
          )}
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
        <Input style={{ width: '50%' }} placeholder="Originating" />
        <Input style={{ width: '50%' }} placeholder="Target" />
        </InputGroup>
        <br />
        <InputGroup compact>
        <Input style={{ width: '100%' }} placeholder="Source" />
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