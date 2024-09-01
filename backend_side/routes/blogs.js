// Backend - blogs.js (routes file)

const express = require('express');
const router = express.Router();
const multer = require('multer');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save uploaded images to 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Blog model
const Blog = require('../models/blog');

// POST /api/blogs - Create a new blog
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const imageUrl = req.file ? req.file.path : null; // Save the image path

    const newBlog = new Blog({
      title,
      description,
      imageUrl,
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error });
  }
});

module.exports = router;
