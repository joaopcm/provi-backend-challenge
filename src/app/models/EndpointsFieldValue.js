import Sequelize, { Model } from 'sequelize';

class EndpointsFieldValue extends Model {
  static init(sequelize) {
    super.init(
      {
        endpoints_field_id: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
        value: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.EndpointsField, {
      foreignKey: 'endpoints_field_id',
      as: 'field',
    });

    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

export default EndpointsFieldValue;
