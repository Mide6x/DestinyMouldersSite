require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin');

async function createInitialAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const admin = new Admin({
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD
    });

    await admin.save();
    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    mongoose.disconnect();
  }
}

createInitialAdmin(); 