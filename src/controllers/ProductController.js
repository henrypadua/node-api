const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  },

//Select
  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

//Create
  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

//Update
async update(req, res) {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  return res.json(product);
},

//Delete
async destroy(req, res) {
  await Product.findByIdAndRemove(req.params.id);

  return res.send();
},


};
