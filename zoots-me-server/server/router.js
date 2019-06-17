const router = require('express').Router()
const controller = require('./controllers/controller.js');

router.get('/photo-data', controller.getAllPhotosData);
router.post('/photo-data', controller.addPhotoData); 

module.exports = router;
