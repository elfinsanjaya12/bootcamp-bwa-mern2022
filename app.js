const express = require('express');
require('./mongoose/connection');
const routerTodos = require('./mongodb/todos');
const routerBooks = require('./mongoose/routerBook');
const routerCategories = require('./mongoose/routerCategory');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(routerTodos);
app.use(routerBooks);
app.use(routerCategories);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
