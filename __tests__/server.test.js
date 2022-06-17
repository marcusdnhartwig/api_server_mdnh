'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
//const { sequelize } = require('../src/models/clothes');
const { sequelize } = require('../src/models/food');
const mockRequest = supertest(server);


beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

let foodOne = {
  yumyum: 'dim sum',
};

describe('Testing REST API', () => {

  test('Create a food', async() => {
    let response = await mockRequest.post('/customer').send(foodOne);

    expect(response.status).toEqual(200);
    expect(response.body.yumyum).toEqual('dim sum');
  });

  test('Should read from food', () => {
    expect(true).toBe(false);
  });

  test('Should update a food', () => {
    expect(true).toBe(false);
  });

  test('Should delete a food', () => {
    expect(true).toBe(false);
  });
});








// beforeAll(async () => {
//   console.log(sequelize);
//   await sequelize.sync();
// });

// afterAll(async () => {
//   await sequelize.drop();
// });

// //////// Adding CRUD for food
// describe('Testing REST API', () => {

//   test('Create a food', async() => {
//     let response = await mockRequest.post('/food').send({
//       food: 'dim sum',
//     });

//     expect(response.status).toEqual(200);
//     //expect(response.body.food).toEqual('tester');
//     expect(response.body.food).toEqual('dim sum');
//   });

//   test('read from food', () => {
//     expect(true).toBe(false);
//   });

//   test('update a food', () => {
//     expect(true).toBe(false);
//   });

//   test('delete a food', () => {
//     expect(true).toBe(false);
//   });

//   /////// Adding CRUD for clothes
//   test('Create some clothes', async() => {
//     let response = await mockRequest.post('/clothes').send({
//       food: 'shirt',
//     });

//     expect(response.status).toEqual(200);
//     //expect(response.body.clothes).toEqual('tester');
//     expect(response.body.clothes).toEqual('shirt');
//   });

//   test('read from clothes', () => {
//     expect(true).toBe(false);
//   });

//   test('update clothes', () => {
//     expect(true).toBe(false);
//   });

//   test('delete clothes', () => {
//     expect(true).toBe(false);
//   });
// });
