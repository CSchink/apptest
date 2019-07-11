import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let Sottlab = new Schema({     

date: {
    Type:Date
},
entry: {
    Type:String
},
century: {
    Type:String
},
force: {
    Type:String
},
primary: {
    Type:String
},
entity: {
    Type:String
},
role: {
    Type:String
},
originating: {
    Type:String
},
regiona: {
    Type:String
},
target: {
    Type:String
},
city: {
    Type:String
},
regionb: {
    Type:String
},
sottcategory: {
    Type: String
},
numbers: {
    Type: Number
},
numberstype: {
    Type: String
},
source: {
    Type: String
},
page: {
    Type: String
}, 
}, { collection : 'sottlab' })

module.exports = mongoose.model('Sottlab', Sottlab);