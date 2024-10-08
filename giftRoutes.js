const express = require('express');
const router = express.Router();
const Gift = require('../models/Gift');

// Obtener todos los regalos
router.get('/', async (req, res) => {
  try {
    const gifts = await Gift.find();
    res.json(gifts);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving gifts' });
  }
});

// Obtener un regalo por ID
router.get('/:id', async (req, res) => {
  try {
    const gift = await Gift.findById(req.params.id);
    if (!gift) return res.status(404).json({ error: 'Gift not found' });
    res.json(gift);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving gift' });
  }
});

module.exports = router;
