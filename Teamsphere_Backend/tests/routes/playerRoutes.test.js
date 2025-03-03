// const request = require('supertest');
// const app = require('../../app'); // Your Express app

// describe('POST /players', () => {
//   it('should create a new player and return the player data', async () => {
//     const response = await request(app)
//       .post('/players')
//       .send({
//         name: 'John',
//         age: 25,
//         category: 'Batsman',
//       });

//     expect(response.status).toBe(201); // Check if status code is 201 (Created)
//     expect(response.body).toHaveProperty('id');
//     expect(response.body.name).toBe('John');
//     expect(response.body.age).toBe(25);
//     expect(response.body.category).toBe('Batsman');
//   });
// });
