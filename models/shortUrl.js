const mongoose = require('mongoose');
const shortId = require('shortid');

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: 'string',
        required: true,
    },
    short: {
        type: 'string',
        required: true,
        default: shortId.generate,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema);