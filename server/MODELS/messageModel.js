const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    message : {
        type: String,
        required: true
    },
    users: Array,
    sender : {
        type: mongoose.SchemaTypes.ObjectId,
        ref : "user",
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('message',messageSchema)