const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title harus diisi'] },
  price: Number,
  stock: { type: Number, required: true },
  status: { type: Boolean, default: false },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
