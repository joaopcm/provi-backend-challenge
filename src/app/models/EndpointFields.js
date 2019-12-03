import Sequelize, { Model } from 'sequelize';

class EndpointField extends Model {
  static init(sequelize) {
    super.init(
      {
        endpoint_id: Sequelize.INTEGER,
        title: Sequelize.STRING,
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
  }
}

export default EndpointField;
