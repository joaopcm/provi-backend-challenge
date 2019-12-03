import Sequelize, { Model } from 'sequelize';

class EndpointFieldValue extends Model {
  static init(sequelize) {
    super.init(
      {
        endpoint_id: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
        value: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Endpoint, {
      foreignKey: 'endpoint_id',
      as: 'endpoint',
    });

    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

export default EndpointFieldValue;
