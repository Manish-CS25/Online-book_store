import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    cover:
    {
        type: String,
        required: true,
    },

});

const Book = mongoose.model('Book', BookSchema);

export default Book;
