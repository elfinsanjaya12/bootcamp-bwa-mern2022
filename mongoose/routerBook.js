const router = require('express').Router();
const Book = require('./bookModel');

router.get('/books', async (req, res) => {
  try {
    const { title, limit = 5, status } = req.query;

    let conditions = {};

    if (title) {
      conditions = { ...conditions, title: { $regex: title, $options: 'i' } };
    }

    if (status) conditions = { ...conditions, status };

    const result = await Book.find(conditions)
      .select('_id title category price stock status')
      .populate('category')
      .limit(limit);

    res.status(200).json({ message: 'Success', data: result });
  } catch (err) {
    console.log(err.message);
  }
});

router.post('/book', async (req, res) => {
  try {
    const { title, price, stock, category } = req.body;

    const result = await Book.create({ title, price, stock, category });

    res.status(201).json({ message: 'Success', data: result });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
