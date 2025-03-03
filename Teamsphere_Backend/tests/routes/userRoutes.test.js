const request = require('supertest');
const app = require('../../app'); // Your Express app

describe('POST /login', () => {
  it('should login an existing user and return a token', async () => {
    const user = {
      email: 'john@example.com',
      password: 'password123',
    };

    // First register the user
    await request(app)
      .post('/register')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      });

    // Then login with the same credentials
    const response = await request(app)
      .post('/login')
      .send(user);

    expect(response.status).toBe(200); // Successful login
    expect(response.body.message).toBe('Login successful');
    expect(response.body.token).toBeDefined();
  });

  it('should return an error if credentials are invalid', async () => {
    const user = {
      email: 'john@example.com',
      password: 'wrongpassword',
    };

    const response = await request(app)
      .post('/login')
      .send(user);

    expect(response.status).toBe(400); // Invalid credentials
    expect(response.body.message).toBe('Invalid credentials');
  });
});
