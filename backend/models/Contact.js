const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema ({

    firstname: {
        type: String,   
        required: true
    },

    lastname: {
        type: String,   
        required: true
    },
    
    phone: {
        type: String,   
        required: true
    },

    email: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }


})

module.exports = Contact = mongoose.model('contact', ContactSchema);
