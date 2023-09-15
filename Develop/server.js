const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Define your routes here

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the notes.html file
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// Define your API routes here
app.get('/api/notes', (req, res) => {
  // Your API logic for fetching notes goes here
  // Return the notes as JSON
  const notes = [{ title: 'Note 1', text: 'This is note 1' }, { title: 'Note 2', text: 'This is note 2' }];
  res.json(notes);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
