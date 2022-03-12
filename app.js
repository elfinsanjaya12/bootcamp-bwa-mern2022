const express = require('express');
const routerTodos = require('./mongodb/todos');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(routerTodos);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
