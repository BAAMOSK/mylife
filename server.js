const express = require('express');
const app  = express();
const jsonParser = require('body-parser').json;
const morgan = require('morgan');
require('dotenv').config();

app.use(morgan('combined'));
app.use(jsonParser);
const knex = require('knex') ({
  client: 'pg',
  connection: process.env.DATABASE_URL
});
console.log(process.env.DATABASE_URL);
app.get('/', (req, res) => {
  res.send('Hello!');
});


// app.post('/todo', (req, res) => {
//   knex('todo')
//   .insert( {'task': req.body.task, 'done': req.body.done} )
//   .returning(['id', 'task'])
//   .then( (result) => {    
//     res.json(result);
//   });
// });



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
