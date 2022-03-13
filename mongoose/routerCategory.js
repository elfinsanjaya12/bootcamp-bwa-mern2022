const router = require('express').Router();
const Category = require('./categoryModel');

router.get('/categories', async (req, res) => {
  try {
    const result = await Category.find();

    res.status(200).json({ message: 'Success', data: result });
  } catch (err) {
    console.log(err.message);
  }
});

router.post('/category', async (req, res) => {
  try {
    const { name } = req.body;

    const result = await Category.create({ name });

    res.status(201).json({ message: 'Success', data: result });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
