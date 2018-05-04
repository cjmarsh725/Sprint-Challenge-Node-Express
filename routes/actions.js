const router = require('express').Router();
const db = require('../data/helpers/actionModel');

// Routes

// Post
router.post('/', (req, res) => {
  db.insert(req.body)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      if (err.errno === 19) {
        res.status(400).json({ msg: 'Please provide all required fields' });
      } else {
        res.status(500).json({ error: err });
      }
    });
});

// Get
router.get('/', (req, res) => {
  db.get()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.get(id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(500).json({ message: 'Action not found' });
    });
});

// Put
router.put('/:id', function(req, res) {
  const id = req.params.id;
  db
    .update(id, req.body)
    .then(response => {
      if (response !== null) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ msg: 'Action could not be updated' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// Delete
router.delete('/:id', function(req, res) {
  const id = req.params.id;
  db.get(id)
    .then(response => {
      db.remove(id)
        .then(status => {
          if (status === 0) {
            res.status(400).json({ msg: 'Unable to delete action.' });
          } else {
            res.status(200).json(response);
          }
        });
    })
    .catch(err => {
      res.status(500).json({ error: 'There was an error when deleting the action.' });
    });
});

module.exports = router;