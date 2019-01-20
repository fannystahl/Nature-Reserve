// Fanny Ståhl 2019
// Schema for natureres
// natureres.js for project

// Requires
const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const natresSchema = new Schema({
    nrName: {
        type: String,
        required: true
    },
    nrSize: {
        type: Number,
        required: true
    },
    nrYear: {
        type: Number,
        required: true
    },
    nrRegion: {
        type: String,
        required: true
    },
    nrTrustee: {
        type: String,
        required: true
    },
    nrPlotOwner: {
        type: String,
        required: true
    },
    nrDescription: {
        type: String,
        required: true
    },
    nrManagementLink: {
        type: String,
        default: null
    },
    nrDecisionLink: {
        type: String,
        default: null
    }
});

// Export
module.exports = mongoose.model('Natureres', natresSchema);
