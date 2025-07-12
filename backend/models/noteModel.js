const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        content:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // automatically adds createdAt and updatedAt fields
    }
);

    module.exports = mongoose.model('Note', noteSchema);