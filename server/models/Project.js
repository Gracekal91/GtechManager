const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    status: {
        type: String,
        enum: ['Not started', 'In progress', 'On hold', 'Completed']
    },
    paymentMode: {
        type: String,
        enum: ['up-front', 'fifty-fifty', 'deposit']
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    }
});

module.exports = mongoose.model('Project', ProjectSchema);