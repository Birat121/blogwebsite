// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');
const path = require('path');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
