import React, { Component } from 'react';
import ReactDom from 'react';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import TagList from './TagList'
import { Icon, Button, Input, AutoComplete } from 'antd';


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
            rowsPerPage: 25,
            download: false,
            rowsPerPageOptions: [10,25,50,100],
    }
        var columns = [ 
            {
                name:"date",
                label: "Date",
                options:{
                    filter: false,
                    sort: true,
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
                    display: false,
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
                display: false,
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
                    display: false,
                    }
                },
                {
                    name: "page",
                    label: 'Page',
                    options: {
                        filter: false,
                        sort: false,
                        display: false,
                        }
                    }
        ]
            
        var data=[]
        console.log(this.state);
        this.state.sottlab.forEach((item) => {
            var arr=[moment(item.Date).format('YYYY DD MMMM'),
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
            <div>
            <TagList />
            <MuiThemeProvider theme={newTheme}>
                <MUIDataTable
                            columns={columns}
                            data={data}
                            options={options}
                            />
            </MuiThemeProvider>
            </div>
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