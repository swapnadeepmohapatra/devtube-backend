require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log('DB Connected');
	})
	.catch((error) => {
		console.log(error);
	});

app.get('/', (req, res) => {
	res.json({ message: 'Welcom to DevTube' });
});

const port = process.env.PORT || 1212;

app.listen(port, () => {
	console.log(`Server Running at ${port}`);
});
