import React, { Component } from 'react';
import ReactDom from 'react';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
// import db from './lambda/server.js'

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
        axios.get('/.netlify/functions/sottLabRead')
        .then((response) => {this.setState({sottlab: response.data})
        console.log(response.data)
     }) 
         .catch(error => {
             console.error(error)
           })
       }
      
    render() {
        
        var options = {
            filterType: 'multiselect',
            selectableRows: 'none',
            responsive: 'scroll',
            rowsPerPage: 10,
            rowsPerPageOptions: [10,25,50,100],
        }
        var columns = [ 
            {
                name:"date",
                label: "Date",
                options:{
                    filter: false,
                    sort: true
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
            var arr=[moment(item.Date).calendar(),
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

// {
            //     label: 'Line of Force',
            //     field: 'lineofforce',
            //     sort: 'asc',
            //     width: 100
            // },
            // {
            //     label: 'Primary Entity',
            //     field: 'primaryentity',
            //     sort: 'asc',
            //     width: 150
            // },
            // {
            //     label: 'Role Played For',
            //     field: 'roleplayedfor',
            //     sort: 'asc',
            //     width: 100
            // },
            // {
            //     label: 'Country of Origin',
            //     field: 'countryoforigin',
            //     sort: 'asc',
            //     width: 150
            // },
            // {
            //     label: 'Region A',
            //     field: 'regiona',
            //     sort: 'asc',
            //     width: 150
            // },
            // {
            //     label: 'Target Country',
            //     field: 'targetcountry',
            //     sort: 'asc',
            //     width: 150
            // },
            // {
            //     label: 'City',
            //     field: 'city',
            //     sort: 'asc',
            //     width: 150
            // },
            // {
            //     label: 'Region B',
            //     field: 'regionb',
            //     sort: 'asc',
            //     width: 150
            // },
            // {
            //     label: 'Sott Category',
            //     field: 'sottcategory',
            //     sort: 'asc',
            //     width: 150
            // },
            // {
            //     label: 'Numbers',
            //     field: 'numbers',
            //     sort: 'asc',
            //     width: 150
            // },
            // {
            //     label: 'Numbers Type',
            //     field: 'numberstype',
            //     sort: 'asc',
            //     width: 150
            // },
            // {
            //     label: 'Source',
            //     field: 'source',
            //     sort: 'asc',
            //     width: 150
            // },
            // {
            //     label: 'Page',
            //     field: 'page',
            //     sort: 'asc',
            //     width: 150
            // }