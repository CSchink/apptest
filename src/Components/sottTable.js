import React, { Component } from 'react';
import ReactDom from 'react';
import axios from 'axios';
import MUIDataTable from "mui-datatables";

import {
    createMuiTheme,
    MuiThemeProvider,
    withStyles
  } from "@material-ui/core/styles";

var moment = require('moment');

const newTheme = createMuiTheme({
    overrides: {
      MUIDataTable: {
         responsiveScroll: {
        //   overflowX: 'none',
        //   height: 'auto',
          maxHeight: 'auto',
        },
      },
    },
})
class SottTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sottlab: []     
        };
    }

    componentDidMount() {
        axios.get('/.netlify/functions/getData')
        .then((response) => {this.setState({sottlab: response.data})
        console.log(response.data)
     }) 
         .catch(error => {
             console.error(error)
           })
       }
      
    render() {
        
        const options = {
            filterType: 'multiselect',
            selectableRows: 'none',
            responsive: 'scroll',
            rowsPerPage: 100,
            download: false,
            rowsPerPageOptions: [10,25,50,100],
            serverSide: true,
            // customSort: (data, colIndex, order) => { return data.sort((a, b) => { if (colIndex === 1) { return (new Date(a.data[colIndex]) < new Date(b.data[colIndex]) ? -1: 1 ) * (order === 'desc' ? 1 : -1); } else { return (a.data[colIndex] < b.data[colIndex] ? -1: 1 ) * (order === 'desc' ? 1 : -1); } }); }
    }
        var columns = [ 
            {
                name:"date",
                label: "Date",
                options:{
                    filter: false,
                    sort: true,
                    sortDirection: 'desc'
                }
            },
            {
            name: "entry",
            label:"Entry",
            options:{
                filter: false,
                sort: false
            }
            }, 
            {
                name: "century",
                label: "Century",
            options:{
                filter: true,
                sort: true
            } 
        },
            {
            name: 'event',
            label: 'Event',
            options: {
                filter: true,
                sort: false,
               }
            },
            {
                name: 'category',
                label: 'SOTT Category',
                options: {
                    filter: true,
                    sort: false,
                   }
                },
            {
            name: 'originating',
            label: 'Originating',
            options: {
                filter: true,
                sort: false,
                display: false,
               }
            },
            {
            name: "target",
            label: 'Target',
            options: {
                filter: true,
                sort: false,
               }
            },
            // {
            //     name: "regionb",
            //     label: 'RegionB',
            //     options: {
            //         filter: true,
            //         sort: false,
            //        }
            //     },
            {
                name: "source",
                label: 'Source',
                options: {
                    filter: true,
                    sort: false,
                    }
                },
                {
                    name: "page",
                    label: 'Page',
                    options: {
                        filter: false,
                        sort: false,
                        }
                    }
        ]
            
        var data=[]
        console.log(this.state);
        this.state.sottlab.forEach((item) => {
            var arr=[moment(item.Date).format('YYYY Do MMMM'),
                    item.Entry,
                    item.Century,
                    item.Event,
                    item.Category,
                    item.Originating,
                    item.Target,
                    item.Source,
                    item.Page
                ]
            data.push(arr)
            // {
            //     date: moment(item.Date).calendar(),
            //     // entry: item.Entry,
            //     century: item.Century
            // })
            })
            console.log(data)
        
            
            return (
<MuiThemeProvider theme={newTheme}>
    <MUIDataTable
                columns={columns}
                data={data}
                options={options}
                />
</MuiThemeProvider>
            
            // <MDBDataTable
            // autoWidth
            // striped
            // bordered
            // hover
            // data={data}
            // />
            )
}
}

export default SottTable;