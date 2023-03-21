import express from 'express';

const app = express();

app.listen('3000');

//Middleware
app.use(express.json());


app.route('/').get((req, res) => res.send(req.query.name));

app.route('/').post((req, res) => res.send(req.body));

app.route('/:parametro').get((req, res) => res.send(req.params.parametro));

