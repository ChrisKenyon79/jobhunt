var express = require('express');
var Job = require('../models/Job');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Recipe.find(function(err, recipes) {
      if (err) return res.status(500).send(err);

      return res.send(recipes);
    });
  })
  .post(function(req, res) {
    Job.create(req.body, function(err, recipe) {
      if (err) return res.status(500).send(err);

      return res.send(job);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Job.findById(req.params.id, function(err, recipe) {
      if (err) return res.status(500).send(err);

      return res.send(job);
    });
  })
  .put(function(req, res) {
    Job.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);

      return res.send({ message: 'success' });
    });
  })
  .delete(function(req, res) {
    Job.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);

      return res.send({ message: 'success' });
    });
  });

module.exports = router;
