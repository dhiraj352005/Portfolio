const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');
const { getIsConnected } = require('../config/db');

// In-memory fallback in case MongoDB is temporarily offline
const memoryStore = [];

// POST /api/contact - submit contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message.',
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    let savedMessage = null;

    if (getIsConnected()) {
      savedMessage = await ContactMessage.create({
        name,
        email,
        subject: subject || 'Portfolio Contact',
        message,
      });
      console.log(`📩 New message saved to MongoDB from ${name} (${email})`);
    } else {
      savedMessage = {
        _id: 'local_' + Date.now(),
        name,
        email,
        subject: subject || 'Portfolio Contact',
        message,
        createdAt: new Date(),
      };
      memoryStore.push(savedMessage);
      console.log(`📩 New message received (in-memory mode) from ${name} (${email})`);
    }

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: savedMessage,
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: error.message,
    });
  }
});

// GET /api/contact - fetch recent messages
router.get('/', async (req, res) => {
  try {
    if (getIsConnected()) {
      const messages = await ContactMessage.find().sort({ createdAt: -1 }).limit(50);
      return res.json({ success: true, count: messages.length, messages });
    } else {
      return res.json({ success: true, count: memoryStore.length, messages: memoryStore });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
