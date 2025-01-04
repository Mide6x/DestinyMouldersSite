const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    enum: ['logo', 'hero', 'about', 'facilities']
  },
  imageUrl: {
    type: String,
    required: true,
  },
  altText: String,
  isActive: {
    type: Boolean,
    default: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Content', contentSchema);