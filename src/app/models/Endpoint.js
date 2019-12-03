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
}

export default Endpoint;
