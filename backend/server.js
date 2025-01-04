const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, 'image-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Image upload endpoint
app.post('/api/upload-image', upload.single('image'), async (req, res) => {
  try {
    const { section } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`;
    
    // Save image URL to database
    // Update the corresponding section's image URL
    
    res.json({ success: true, imageUrl });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));