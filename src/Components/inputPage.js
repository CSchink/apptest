import React, {Fragment} from 'react';

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
            <Fragment>
            <div className="form-group">
                <input type="text"
                name='date'
                placeholder='date' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <input type="text"
                name='entry'
                placeholder='entry' 
                value={this.state.entry} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group"> 
            <input type="text"
                name='century'
                placeholder='century' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <input type="text"    
                name='event'
                placeholder='event' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <input type="text"    
                name='category'
                placeholder='category' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <input type="text"    
                name='originating'
                placeholder='originating' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <input type="text"    
                name='target'
                placeholder='target' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <input type="text"    
                name='source'
                placeholder='source' 
                value={this.state.date} 
                onChange={e => this.change(e)}
                />
            </div>
            <div className="form-group">
            <input type="text"    
                name='page'
                placeholder='page' 
                value={this.state.date} 
                className="form-control form-control-md"
                onChange={e => this.change(e)}
            />
            </div>
            </Fragment>
        )
    }
}

export default InputPage;