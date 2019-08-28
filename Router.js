const express = require('express');

const knex = require('knex');
const db = require('./data/dbConfig.js');
const router = express.Router();

router.get('', (req, res) => {
  db('cars')
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Unable to get all records from the database.'
      })
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('cars')
    .where({ id })
    .then(cars => {
      const car = cars[0];
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({
          message: 'Invalid record ID'
        });
      };
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving record from the database.'
      })
    });
});

router.post('/', (req, res) => {
  const car = req.body;

  db('cars')
    .insert(car)
    .then(newcar => {
      res.status(201).json(newcar[0]);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Failed to create new record.'
      });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db('cars')
    .where({ id })
    .delete()
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: `${count} record(s) has been deleted.`
        });
      } else {
        res.status(404).json({
          message: 'Invalid record ID'
        });
      };
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving record from the database.'
      })
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  db('cars')
    .where({ id })
    .update(changes)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Failed to update record.'
      });
    });
});

module.exports = router;