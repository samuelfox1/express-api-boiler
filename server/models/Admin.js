const { Schema, model } = require('mongoose');

const adminSchema = new Schema(
    {
        first: {
            type: String,
            required: true,
            max_length: 50,
        },
        last: {
            type: String,
            required: true,
            max_length: 50,
        },
        email: {
            type: String,
            required: true,
            max_length: 50,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

module.exports = model('admin', adminSchema);