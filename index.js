import express from 'express';

const app = express();

app.listen('3000');

//Middleware
app.use(express.json());

let author = "Henrique";


app.route('/').get((req, res) => res.send(author));

app.route('/').put((req, res) => {
  author = req.body.author;
  res.send(author);
})