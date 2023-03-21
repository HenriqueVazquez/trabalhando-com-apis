import express from 'express';

const app = express();

app.listen('3000');

//Middleware
app.use(express.json());


app.route('/').post((req, res) => {
  const { nome, livrosFavoritos } = req.body;
  res.send(`Meu nome é ${nome}, e gosto dos livros ${livrosFavoritos}`);
});



