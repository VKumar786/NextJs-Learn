import mongoose from "mongoose";

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
    },
    price: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

//Export the model
export const Product = mongoose.models.products || mongoose.model('products', productSchema);