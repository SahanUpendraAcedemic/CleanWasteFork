// routes/driverRoutes.js
const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');
const authMiddleware = require('../middlewares/authMiddleware');

// Get assigned pickups for a driver (driver-specific)
router.get('/assigned-pickups', authMiddleware.verifyToken, authMiddleware.isDriver, driverController.getAssignedPickups);

module.exports = router;
