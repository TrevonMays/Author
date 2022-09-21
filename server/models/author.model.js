const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        minLength: [3, 'Title must be at least three characters.']
    },
    writer: {
        type: String,
        required: [true, 'Artist is required.'],
        min: [3, 'Author must be at least three characters.']
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minLength: [3, 'Description must be at least three characters.']
    },
}, { timestamps: true });

const author = mongoose.model('author', authorSchema);
module.exports = author;

