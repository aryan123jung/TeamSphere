const db = require('../../db'); // Import your database connection
const playerModel = require('../../models/player');

describe('Player Model Tests', () => {
  // Set up a new test database before each test
  beforeAll(async () => {
    await db.none('CREATE TABLE IF NOT EXISTS players (id SERIAL PRIMARY KEY, name TEXT, age INT, category TEXT)');
  });

  it('should create a new player and return the player data', async () => {
    const player = await playerModel.createPlayer('John', 25, 'Batsman');
    
    expect(player).toHaveProperty('id');
    expect(player.name).toBe('John');
    expect(player.age).toBe(25);
    expect(player.category).toBe('Batsman');
  });

  it('should retrieve player data by name', async () => {
    const player = await playerModel.getPlayerByName('John');
    
    expect(player).toBeDefined();
    expect(player.name).toBe('John');
    expect(player.age).toBe(25);
    expect(player.category).toBe('Batsman');
  });

  // Clean up the database after the tests
  afterAll(async () => {
    await db.none('DROP TABLE IF EXISTS players');
    await db.$pool.end(); // Close the database connection
  });
});
