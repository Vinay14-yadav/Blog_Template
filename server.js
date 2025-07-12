const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Portfolio - Home'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'My Projects'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Me'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 