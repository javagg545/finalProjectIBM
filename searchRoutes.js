const express = require('express');
const router = express.Router();
const Gift = require('../models/Gift');

// Filtrar regalos por categoría
router.get('/search', async (req, res) => {
  try {
    const { category } = req.query;
    const gifts = await Gift.find({ category });
    res.json(gifts);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving gifts by category' });
  }
});

module.exports = router;
