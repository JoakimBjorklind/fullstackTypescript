import express from 'express';
import { calculateBmi } from './bmiCalculator';

//const express = require('express');
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try {
    if (!isNaN(Number(req.query.weight)) && !isNaN(Number(req.query.height))) {
        const height = Number(req.query.height);
        const weight = Number(req.query.weight);
        const bmi = calculateBmi(height, weight);
        const response = {
          "height": height,
          "weight": weight,
          "bmi": bmi
        }
        res.send(response)
      } else {
        res.status(400).send({
          error: 'Malformatted parameters'
        })
      }
    } catch (error) {
      res.status(400).send({
        error: error.message
      })
    }
  })
const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});