const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    address: {type: String}
});

module.exports = mongoose.model('Customer', CustomerSchema);