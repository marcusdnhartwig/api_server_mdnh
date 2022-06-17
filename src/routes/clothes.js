'use strict';

const express = require('express');
const { ClothesModel } = require('../models');

const router = express.Router();

// post
router.post('/clothes', async (req, res, next) => {
  let clothes = req.body;
  console.log(req.body);

  //query to the database
  let response = await ClothesModel.create(clothes);
  res.status(200).send(response);
});

// get
router.get('/clothes', async (req, res, next) => {
  let allClothes = await ClothesModel.findAll();
  res.status(200).send(allClothes);
});

// get one
router.get('/clothes/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneClothes = await ClothesModel.findOne({where: { id }});
  res.status(200).send(oneClothe);
});

// put
router.put('/clothes/:id', async (req, res, next) => {
  let { id } = req.params;

  await ClothesModel.update(req.body, {where: { id }});
  let updatedClothes = await ClothesModel.findOne({where: { id }});
  res.status(200).send(updatedClothes);
});

// delete
router.delete('/clothes/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedClothes = await ClothesModel.findOne({where: { id }});

  await ClothesModel.destroy({where: { id }});
  res.status(200).send(deletedClothes);
});

module.exports = router;
