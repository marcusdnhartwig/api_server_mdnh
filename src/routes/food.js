'use strict';

const express = require('express');
const { FoodModel } = require('../models');

const router = express.Router();

// post
router.post('/food', async (req, res, next) => {
  let food = req.body;
  console.log(req.body);

  //query to the database
  let response = await FoodModel.create(food);
  res.status(200).send(response);
});

// get
router.get('/food', async (req, res, next) => {
  let allFood = await FoodModel.findAll();
  res.status(200).send(allFood);
});

// get one
router.get('/food/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneFood = await FoodModel.findOne({where: { id }});
  res.status(200).send(oneFood);
});

// put
router.put('/food/:id', async (req, res, next) => {
  let { id } = req.params;

  await FoodModel.update(req.body, {where: { id }});
  let updatedFood = await FoodModel.findOne({where: { id }});
  res.status(200).send(updatedFood);
});

// delete
router.delete('/food/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedFood = await CustomerFood.findOne({where: { id }});

  await FoodModel.destroy({where: { id }});
  res.status(200).send(deletedFood);
});

module.exports = router;
