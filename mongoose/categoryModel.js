const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name harus diisi'] },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
