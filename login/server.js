// const express = require('express');
import express from 'express'
const app = express();

app.get('/', (req, res) => {
    res.send('Hola desde IIS con Node');
})

app.get('/nosotros', (req, res) => {
    res.send('Desde nosotros');
})

// Toma el puerto especificado en IIS
app.listen(process.env.PORT, () => {})