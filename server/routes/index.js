const router = require('express').Router();

const {
  userController
} = require('../controllers');

router.post('/detail', userController.createDetail);
router.get('/detail/:id', userController.getDetail);
router.delete('/detail/:id', userController.deleteDetail);
router.put('/detail/:id', userController.updateDetail);

module.exports = router;