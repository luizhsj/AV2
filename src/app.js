const express = require('express');
const db = require('./database');
const jogadorRoutes = require('./routes/jogadorRoutes');
const timeRoutes = require('./routes/timeRoutes');
const partidaRoutes = require('./routes/partidaRoutes');

const app = express();
app.use(express.json());

app.use('/api', jogadorRoutes);
app.use('/api', timeRoutes);
app.use('/api', partidaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});