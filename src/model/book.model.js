
const mongoose = require('mongoose')

const Book = new mongoose.Schema(
    {
       
        name: 
        {
            type: String,
            required: true,
            minlength:3,
            maxlength:50,
        },
        author: {
            type: String,
            required: true,
            minlength:3,
            maxlength:50,
        },
        type_id: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
)

const model = mongoose.model('Book', Book);
module.exports = model;
