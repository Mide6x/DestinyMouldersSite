require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const Admin = require('./models/Admin');
const Content = require('./models/Content');
const Image = require('./models/Image');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Auth middleware
const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new Error('No token provided');
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.adminId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};

// Routes
app.post('/api/admin/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = new Admin({ username, password });
    await admin.save();
    res.status(201).json({ message: 'Admin created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) throw new Error('Admin not found');

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/upload/logo', authMiddleware, upload.single('logo'), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('No file uploaded');
    }

    const imageUrl = `/uploads/${req.file.filename}`;
    const content = await Content.findOneAndUpdate(
      { section: 'logo' },
      { 
        imageUrl,
        altText: 'School Logo',
        isActive: true
      },
      { upsert: true, new: true }
    );

    res.json({ 
      success: true,
      imageUrl: content.imageUrl 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/logo', async (req, res) => {
  try {
    const logo = await Content.findOne({ section: 'logo', isActive: true });
    res.json(logo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/logo', authMiddleware, async (req, res) => {
  try {
    const logo = await Content.findOne({ section: 'logo', isActive: true });
    if (logo) {
      const filePath = path.join(__dirname, logo.imageUrl);
      fs.unlink(filePath, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
      await Content.deleteOne({ _id: logo._id });
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all images
app.get('/api/images/all', async (req, res) => {
  try {
    const images = await Image.find({});
    const imagesBySection = images.reduce((acc, img) => {
      acc[img.section] = img;
      return acc;
    }, {});
    res.json(imagesBySection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upload image
app.post('/api/upload/image', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { section } = req.body;
    const file = req.file;

    if (!file) throw new Error('No file uploaded');

    // Delete existing image for this section if it exists
    const existingImage = await Image.findOne({ section });
    if (existingImage) {
      const filePath = path.join(__dirname, existingImage.imageUrl);
      fs.unlink(filePath, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
      await Image.deleteOne({ _id: existingImage._id });
    }

    const image = new Image({
      section,
      imageUrl: `/uploads/${file.filename}`
    });

    await image.save();
    res.json(image);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete image
app.delete('/api/images/:section', authMiddleware, async (req, res) => {
  try {
    const { section } = req.params;
    const image = await Image.findOne({ section });
    
    if (image) {
      const filePath = path.join(__dirname, image.imageUrl);
      fs.unlink(filePath, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
      await Image.deleteOne({ _id: image._id });
    }
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}); 

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});