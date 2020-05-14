require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const likeRoutes = require('./routes/like');
const videoRoutes = require('./routes/video');

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

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', likeRoutes);
app.use('/api', videoRoutes);

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to DevTube' });
});

const port = process.env.PORT || 1212;

app.listen(port, () => {
	console.log(`Server Running at ${port}`);
});
