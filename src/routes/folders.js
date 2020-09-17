require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const pool = new Pool({  
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

router.post('/', async (req, res) => {
    //try {
        let sql = 'INSERT INTO folders VALUES ($1) RETURNING *';
        let params = [ req.body.name ];
        let response = await pool.query(sql, params);
        console.log(response.rows)
        res.send(response.rows)
    //}
    //catch {
    //    res.send('Account not found')
    //}
})

module.exports = router;