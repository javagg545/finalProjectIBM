const express = require('express');
const app = express();
const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');

// Middleware
app.use(express.json());

// Rutas
app.use('/api/gifts', giftRoutes);
app.use('/api/gifts/search', searchRoutes);

// Puerto y conexión al servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
