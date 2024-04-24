const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// Create connection to MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'areeba018',
    database: 'webtech'
});

// Connect to MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get("/",(req,res)=>{
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/application', (req, res) => {
    res.render('application');
});
app.get('/certification', (req, res) => {
    res.render('certification');
});
app.get('/academics', (req, res) => {
    res.render('academics'); 
});
app.get('/index', (req, res) => {
    res.render('index');
});
app.get('/open_area', (req, res) => {
    res.render('open_area');
});
app.get('/electrician', (req, res) => {
    res.render('electrician');
});
app.get('/fitter', (req, res) => {
    res.render('fitter');
});
app.get('/electronic', (req, res) => {
    res.render('electronic');
});
app.get('/computer', (req, res) => {
    res.render('computer');
});
app.get('/tablet', (req, res) => {
    res.render('tablet');
});
app.get('/stackholder', (req, res) => {
    res.render('stackholder');
});
app.get('/AAM', (req, res) => {
    res.render('AAM');
});
app.get('/kits', (req, res) => {
    res.render('kits');
});
app.get('/ekana', (req, res) => {
    res.render('ekana');
});
app.get('/csr', (req, res) => {
    res.render('csr');
});
app.get('/caregiver', (req, res) => {
    res.render('caregiver');
});
app.get('/automobile', (req, res) => {
    res.render('automobile');
});
app.get('/placements', (req, res) => {
    res.render('placements'); 
});

// Handle POST request to '/submit'
app.post('/submit', (req, res) => {
    const { Name, fatherName, motherName, dob, gender, caste, number, email, mobile, course, year, RollNo, Marks } = req.body;
    const sql = "INSERT INTO application (Name, fatherName, motherName, dob, gender, caste, number, email, mobile, course, year, RollNo, Marks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(sql, [Name, fatherName, motherName, dob, gender, caste, number, email, mobile, course, year, RollNo, Marks], (err, result) => {
        if (err) {
            console.error('Error creating user:', err);
            res.status(500).send('Error Creating User Account !');
        } else {
            res.redirect('/');
        }
    });
});

// Start the server
const port = 4500;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
