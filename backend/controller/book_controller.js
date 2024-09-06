import Book from "../models/books_model.js"; // Ensure the correct file extension

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
}
