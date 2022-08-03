const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    }
});

module.exports = mongoose.model('Author', AuthorSchema);