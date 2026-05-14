const express = require('express');
const router = express.Router();
const { submitContact, getContacts } = require('../controllers/contactController');

// Rate limiting middleware (simple in-memory implementation)
const rateLimitStore = new Map();

const rateLimit = (maxRequests = 5, windowMs = 15 * 60 * 1000) => {
  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();
    const windowStart = now - windowMs;

    if (!rateLimitStore.has(key)) {
      rateLimitStore.set(key, []);
    }

    const requests = rateLimitStore.get(key);
    // Remove old requests outside the window
    const validRequests = requests.filter(time => time > windowStart);

    if (validRequests.length >= maxRequests) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.'
      });
    }

    validRequests.push(now);
    rateLimitStore.set(key, validRequests);

    next();
  };
};

// POST /api/contact - Submit contact form
router.post('/contact', rateLimit(3, 60 * 60 * 1000), submitContact); // 3 requests per hour

// GET /api/contacts - Get all contacts (admin endpoint)
router.get('/contacts', getContacts);

module.exports = router;