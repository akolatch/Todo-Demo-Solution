const router = require('express').Router();
const controller = require('./controllers');

router.route('/').get(controller.read).post(controller.write);

router.route('/:id').put(controller.update).delete(controller.destroy);

module.exports = router;
