import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password when new user created', async () => {
    const user = await factory.create('User', {
      password: 'euQueroEntrarNaProvi',
    });

    const compareHash = await bcrypt.compare(
      'euQueroEntrarNaProvi',
      user.password_hash
    );

    expect(compareHash).toBe(true);
  });

  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able with duplicated email', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(401);
  });

  it('should be able to sign in', async () => {
    await request(app)
      .post('/users')
      .send({
        email: 'jopcmelo@gmail.com',
        password: 'euQueroEntrarNaProvi',
      });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'jopcmelo@gmail.com',
        password: 'euQueroEntrarNaProvi',
      });

    expect(response.body).toHaveProperty('user');
  });
});
