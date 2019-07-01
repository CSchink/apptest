import React, {Component} from 'react';
import { MDBDataTable } from 'mdbreact';

class DataTablePage extends Component {

    render() {        
        return (
        <MDBDataTable
        striped
        bordered
        hover
        data={data}
        />
        )
}
}


export default DataTablePage;