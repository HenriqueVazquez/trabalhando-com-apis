import express from 'express';

const app = express();

app.listen('3000');

//Middleware
app.use(express.json());

app.route('/').get((req, res) => res.send(req.query.name));

app.route('/about/user').get((req, res) => res.send(req.query));



