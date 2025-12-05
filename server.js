const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for case study pages
app.get('/case-study/:id', (req, res) => {
  const id = req.params.id;
  res.sendFile(path.join(__dirname, 'public', 'case-study-' + id + '.html'));
});


// Handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, description } = req.body;
  console.log('Contact form submitted:', { name, email, description });
  res.send(`
    <h1>Thank you for contacting me!</h1>
    <p>I will get back to you soon. Feel free to also reach out to me on LinkedIn.</p>
    <a href="/" style="
      display: inline-block; 
      margin-top: 20px; 
      padding: 10px 20px; 
      background-color: #007bff; 
      color: white; 
      text-decoration: none; 
      border-radius: 5px;
    ">
      Return to Home Page
    </a>
  `);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
