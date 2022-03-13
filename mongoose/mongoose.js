const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/latihan');

const db = mongoose.connection;

const categorySchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name harus diisi'] },
});

const Category = mongoose.model('Category', categorySchema);

const bookSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title harus diisi'] },
  price: Number,
  stock: { type: Number, required: true },
  status: { type: Boolean, default: false },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

const Book = mongoose.model('Book', bookSchema);

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', async () => {
  console.log('Berhasil connect database');

  // const category = await Category.create({ name: 'Backend' });

  // console.log(category);

  // menampilkan semua data book
  const book = await Book.find().populate('category');
  console.log(book);

  // menambahkan data buku
  // cara pertama
  // const book = new Book({
  //   title: 'Belajar Mongoose',
  //   price: 10000,
  //   stock: 10,
  //   status: true,
  // });

  // await book.save();
  // console.log(book);

  // cara kedua
  // try {
  //   const book = await Book.create({
  //     title: 'Belajar Ebook MERN',
  //     price: 10000,
  //     stock: 10,
  //     status: true,
  //     category: '622d9bfddb5e68571854a9a4',
  //   });

  //   console.log(book);
  // } catch (err) {
  //   console.log(err.message);
  // }

  // filter di book
  // const book = await Book.find({
  //   price: { $ne: null },
  // });
  // console.log(book);

  // menampilkan data single berdasarkan _id
  // const book = await Book.findById('622d91a1dbd1ecc48127ca1a');

  // console.log(book);

  // delete book
  // const book = await Book.findByIdAndDelete('622d8bef854a8acbfefc5348');
  // console.log(book);

  // menampikan data single
  // const book = await Book.findOne({ title: 'Belajar Mongoose' });
  // console.log(book);

  // update data book
  // cara pertama
  // const book = await Book.findByIdAndUpdate(
  //   { _id: '622d91a1dbd1ecc48127ca1a' },
  //   { title: 'Belajar NodeJS', category: '622d9bfddb5e68571854a9a4' }
  // );
  // console.log(book);

  // cara ke dua
  // const book = await Book.findById('622d91a1dbd1ecc48127ca1a');
  // book._doc.category = '622d9bfddb5e68571854a9a4';
  // await book.save();
  // console.log(book);
});
