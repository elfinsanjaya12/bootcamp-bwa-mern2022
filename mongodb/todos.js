const router = require('express').Router();
const client = require('./connection');
const ObjectId = require('mongodb').ObjectId;

router.get('/todos', async (req, res) => {
  try {
    const db = client.db('latihan');

    const result = await db.collection('todos').find().toArray();

    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.get('/todo/:id', async (req, res) => {
  try {
    const db = client.db('latihan');

    const result = await db
      .collection('todos')
      .findOne({ _id: ObjectId(req.params.id) });

    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.post('/todo', async (req, res) => {
  try {
    const { todo } = req.body;

    const db = client.db('latihan');

    await db.collection('todos').insertOne({
      todo,
    });

    res.status(201).json({ status: 201, message: 'Berhasil tambah todo' });
  } catch (err) {
    console.log(err);
  }
});

router.put('/todo/:id', async (req, res) => {
  try {
    const { todo } = req.body;

    const db = client.db('latihan');

    await db
      .collection('todos')
      .updateOne({ _id: ObjectId(req.params.id) }, { $set: { todo } });

    res.status(200).json({ status: 200, message: 'Berhasil update todo' });
  } catch (err) {
    console.log(err);
  }
});

router.delete('/todo/:id', async (req, res) => {
  try {
    const db = client.db('latihan');

    await db.collection('todos').deleteOne({ _id: ObjectId(req.params.id) });

    res.status(200).json({ status: 200, message: 'Berhasil hapus todo' });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
