import Sequelize, { Model } from 'sequelize';

class EndpointsOrder extends Model {
  static init(sequelize) {
    super.init(
      {
        endpoint_id: Sequelize.INTEGER,
        order: Sequelize.INTEGER,
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

export default EndpointsOrder;
