const models = require('../models');

module.exports = {
  read: async (req, res) => {
    try {
      const data = await models.find();
      if (data) {
        res.status(200).json(data);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  write: async (req, res) => {
    try {
      const newData = req.body;
      newData.created_at = Date.now();
      await models.create(newData);
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const updateData = req.body;
      updateData.updated_at = Date.now();
      await models.update(id, updateData);
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  destroy: async (req, res) => {
    try {
      const id = req.query.id;
      await models.delete(id);
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
