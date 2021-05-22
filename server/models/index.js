const { Collection } = require('../database');
module.exports = {
  find: async () => {
    return await Collection.find();
  },

  create: async (data) => {
    return await Collection.create(data);
  },

  update: async (id, updateData) => {
    await Collection.findByIdAndUpdate(id, updateData);
  },

  delete: async (id) => {
    await Collection.findByIdAndDelete(id);
  },
};
