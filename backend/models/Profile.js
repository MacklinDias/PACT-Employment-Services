const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({

    firstname: {
        type: String,   
        required: true
    },

    lastname: {
        type: String,   
        required: true
    },
    
    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,   
        required: true
    },

    message: {
        type: String,
        required: true
    },
    male: {
        type: Boolean,
    },
    
    female: {
        type: Boolean,
    },

    date: {
        type: Date,
        default: Date.now
    }


})

module.exports = Profile = mongoose.model('profile', ProfileSchema);
