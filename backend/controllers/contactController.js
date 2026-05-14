const Contact = require('../models/Contact');

// Input validation helper
const validateContactInput = (data) => {
  const errors = [];
  const { name, email, message } = data;

  // Name validation
  if (!name || typeof name !== 'string') {
    errors.push('Name is required and must be a string');
  } else if (name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  } else if (name.trim().length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string') {
    errors.push('Email is required and must be a string');
  } else if (!emailRegex.test(email.trim())) {
    errors.push('Please provide a valid email address');
  } else if (email.trim().length > 254) {
    errors.push('Email address is too long');
  }

  // Message validation
  if (!message || typeof message !== 'string') {
    errors.push('Message is required and must be a string');
  } else if (message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  } else if (message.trim().length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Sanitize input helper
const sanitizeInput = (data) => {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    message: data.message.trim()
  };
};

// Handle contact form submission
const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    const validation = validateContactInput({ name, email, message });
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validation.errors
      });
    }

    // Sanitize input
    const sanitizedData = sanitizeInput({ name, email, message });

    // Check for duplicate submissions (same email in last hour)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const recentSubmission = await Contact.findOne({
      email: sanitizedData.email,
      createdAt: { $gte: oneHourAgo }
    });

    if (recentSubmission) {
      return res.status(429).json({
        success: false,
        message: 'Please wait at least 1 hour before sending another message'
      });
    }

    // Create new contact
    const newContact = new Contact(sanitizedData);

    // Save to database
    const savedContact = await newContact.save();

    // Log successful submission (without sensitive data)
    console.log(`New contact form submission from ${sanitizedData.email} at ${new Date().toISOString()}`);

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you within 24 hours.',
      contactId: savedContact._id
    });

  } catch (error) {
    console.error('Error submitting contact form:', {
      message: error.message,
      stack: error.stack,
      body: req.body
    });

    // Handle specific database errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid data provided',
        errors: Object.values(error.errors).map(err => err.message)
      });
    }

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'A submission with this email already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

// Get all contacts (admin endpoint - should be protected in production)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .select('-__v');

    res.json({
      success: true,
      count: contacts.length,
      contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
};

module.exports = {
  submitContact,
  getContacts
};