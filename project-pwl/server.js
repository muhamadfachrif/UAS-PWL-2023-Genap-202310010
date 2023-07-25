// import modul
const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');

// inisialisasi aplikasi
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// url koneksi ke database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'racik_pc'
});

connection.connect(error => {
    if (error) {
        console.error('Error connecting to database', error);
    } else {
        console.log('Connected to database');
    }
});

// Menambahkan middleware CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Mengizinkan permintaan dari asal apa pun
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// POST /signup 
app.post('/racikpc', (req, res) => {
    const { username, password } = req.body;

    const query = 'INSERT INTO racikpc (username, password) VALUES(?, ?)';
    connection.query(query, [username, password], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('Product added to database!');
            res.status(200).json({ message: 'Account added to database' });
        }
    })
})

// GET /sign_in
app.get('/racikpc', (req, res) => {
    const query = "SELECT * FROM racikpc";

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(200).json(results);
        }
    });
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});