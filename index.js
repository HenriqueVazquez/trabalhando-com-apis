import express from 'express';

const app = express();

app.listen('3000');

//Middleware
app.use(express.json());

let author = "Henrique";

app.route('/:identificador').delete((req, res) => {
  author = "";
  res.send("Apagado! " + req.params.identificador);
});

