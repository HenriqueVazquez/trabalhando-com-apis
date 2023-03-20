import express from 'express';

const app = express();

app.listen('3000');

//Middleware
app.use(express.json());


app.route('/').post((req, res) => res.send(req.body));