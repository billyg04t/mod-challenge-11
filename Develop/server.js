const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Enable CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Define API routes here
app.get('/api/notes', (req, res) => {
  // Return the notes as JSON
  const notes = [{ title: 'Note 1', text: 'This is note 1' }, { title: 'Note 2', text: 'This is note 2' }];
  res.json(notes);
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the notes.html file
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
