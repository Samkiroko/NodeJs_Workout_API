const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all workouts');
});

router.get('/:workoutid', (req, res) => {
  res.send('Get an existing workout');
});

router.post('/', (req, res) => {
  res.send('Create a new workout');
});

router.patch('/:workoutId', (req, res) => {
  res.send('Update an existing workout');
});

router.delete('/:workoutId', (req, res) => {
  res.send('Delete an existing workout');
});

module.exports = router;
