const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    enum: ['logo', 'building', 'creche', 'preschool', 'nursery', 'kindergarten', 'primary', 'afterSchool']
  },
  imageUrl: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Image', imageSchema); 