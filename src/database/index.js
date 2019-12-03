import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Endpoint from '../app/models/Endpoint';
import EndpointField from '../app/models/EndpointsField';
import EndpointFieldValue from '../app/models/EndpointsFieldValue';
import EndpointOrder from '../app/models/EndpointsOrder';

const models = [
  User,
  Endpoint,
  EndpointField,
  EndpointFieldValue,
  EndpointOrder,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
