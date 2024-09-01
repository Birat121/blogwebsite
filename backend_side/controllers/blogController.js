// controllers/blogController.js
const Blog = require('../models/blog');

// Fetch all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;
    const newBlog = new Blog({ title, description, imageUrl });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: 'Error creating blog', error });
  }
};

// Update a blog
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, imageUrl } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, description, imageUrl },
      { new: true }
    );
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: 'Error updating blog', error });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting blog', error });
  }
};
