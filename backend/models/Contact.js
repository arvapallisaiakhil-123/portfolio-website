const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [100, 'Name must be less than 100 characters'],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z\s'-]+$/.test(v);
      },
      message: 'Name contains invalid characters'
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    maxlength: [254, 'Email address is too long'],
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Please provide a valid email address'
    }
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minlength: [10, 'Message must be at least 10 characters long'],
    maxlength: [2000, 'Message must be less than 2000 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for performance
contactSchema.index({ email: 1, createdAt: -1 }); // For duplicate checking
contactSchema.index({ createdAt: -1 }); // For sorting recent contacts

// Virtual for formatted date
contactSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
});

// Pre-save middleware to update updatedAt
contactSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Static method to get contact stats
contactSchema.statics.getStats = async function() {
  const stats = await this.aggregate([
    {
      $group: {
        _id: null,
        totalContacts: { $sum: 1 },
        uniqueEmails: { $addToSet: '$email' }
      }
    },
    {
      $project: {
        totalContacts: 1,
        uniqueEmailsCount: { $size: '$uniqueEmails' }
      }
    }
  ]);

  return stats[0] || { totalContacts: 0, uniqueEmailsCount: 0 };
};

module.exports = mongoose.model('Contact', contactSchema);