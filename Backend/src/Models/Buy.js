const mongoose = require('mongoose');

const buySchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    }
},{
    timestamps: true
});

const Buy = mongoose.model('Buy',buySchema);

module.exports = Buy;