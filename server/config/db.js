const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.warn(`⚠️  MongoDB Connection Warning: ${error.message}`);
    console.warn(`👉 To persist messages to MongoDB, provide a valid MONGO_URI in server/.env (e.g. MongoDB Atlas or local MongoDB).`);
  }
};

const getIsConnected = () => isConnected;

module.exports = { connectDB, getIsConnected };
