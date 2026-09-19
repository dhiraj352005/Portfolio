const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB, getIsConnected } = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL ? [process.env.CLIENT_URL, 'http://localhost:8081', 'http://127.0.0.1:8081', 'http://localhost:5173'] : ['http://localhost:8081', 'http://127.0.0.1:8081', 'http://localhost:5173'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    database: getIsConnected() ? 'connected' : 'offline/in-memory',
  });
});

// Root welcome route
app.get('/', (req, res) => {
  res.json({
    name: 'Dhiraj Raut Portfolio API',
    status: 'Running',
    version: '1.0.0',
    endpoints: {
      contact: 'POST /api/contact',
      messages: 'GET /api/contact',
      health: 'GET /api/health',
    },
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
