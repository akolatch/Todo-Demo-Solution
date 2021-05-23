const router = require('express').Router();
const controller = require('./controllers');

router.route('/todo').get(controller.read).post(controller.write);

router.route('/todo/:id').put(controller.update).delete(controller.destroy);

module.exports = router;
