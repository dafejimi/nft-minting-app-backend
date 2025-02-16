// src/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const connectDB = require('../config/database');
const nftRoutes = require('../routes/nft.routes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

// Routes
app.use('/api/nft', nftRoutes);

// Error handler middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    message: err.message
  });
};

app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 8000; // Use assigned port
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
