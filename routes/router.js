var express = require('express');
var users = require('./users');
var clinics = require('./clinics');
var waitings = require('./waitings');

var router = express.Router();

router.post('/signup', users.add);
router.get('/users/:id', users.findById);
router.get('/clinics/:id', clinics.findById);
router.post('/clinics/:id/waitings/', waitings.add);
router.get('/search/users', users.findByEmail);
router.get('/search/clinics', clinics.search);
router.get('/search/waitings', waitings.findByUserId);
router.get('/waitings/:id', waitings.findById);
router.delete('/waitings/:id', waitings.cancel);

module.exports = router;