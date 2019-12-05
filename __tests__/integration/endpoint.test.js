import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

import Endpoint from '../../src/app/models/Endpoint';
import EndpointsField from '../../src/app/models/EndpointsField';

describe('Endpoint', () => {
  beforeAll(async () => {
    await Endpoint.create({
      slug: 'cpf',
    });

    await EndpointsField.create({
      endpoint_id: 1,
      title: 'cpf',
    });

    await Endpoint.create({
      slug: 'fullName',
    });

    await EndpointsField.create({
      endpoint_id: 2,
      title: 'first_name',
    });

    await EndpointsField.create({
      endpoint_id: 2,
      title: 'last_name',
    });
  });

  beforeEach(async () => {
    await truncate();
  });

  it('should be enforced to enter CPF data first', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send(user);

    const {
      body: { token },
    } = await request(app)
      .post('/sessions')
      .send(user);

    const response = await request(app)
      .post('/endpoints/fullName')
      .set('Authorization', `Bearer ${token}`)
      .send({
        data: {
          first_name: 'João Pedro da Cruz',
          last_name: 'Melo',
        },
      });

    expect(response.status).toBe(400);
    // expect(response.body).toHaveProperty('error');
    // expect(response.body.error).toBe('Please, enter your CPF data first');
  });
});
