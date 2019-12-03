import Sequelize, { Model } from 'sequelize';

class Endpoint extends Model {
  static init(sequelize) {
    super.init(
      {
        slug: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.EndpointsField, {
      as: 'fields',
    });

    this.hasMany(models.EndpointsOrder, {
      foreignKey: 'endpoint_id',
      as: 'order',
    });
  }
}

export default Endpoint;
