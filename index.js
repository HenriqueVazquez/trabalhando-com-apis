import express from 'express';
import axios from 'axios';

const app = express();

app.listen('3000');

//Middleware
app.use(express.json());

app.route('/').get((req, res) => {
  axios.get('https://api.github.com/users/henriquevazquez')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch((error) => console.error(error));
});



