const mongoose = require('mongoose')

const Schema = mongoose.Schema
const missionsSchema =new Schema({
    title: {
        type: String,
        required: true,
    },
    data: {
        type: Object,
        required:true,
    },
    description:{
        type : String
    }
},{timestamps:true})
module.exports= mongoose.model('Mission', missionsSchema)