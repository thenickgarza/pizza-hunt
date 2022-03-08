const { Schema, model } = require("mongoose");

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
})

// creates the pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// exports the pizza model
module.exports = Pizza;