const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Define your routes here
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// ... Other routes ...

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
