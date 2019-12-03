module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('endpoints_order', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      endpoint_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'endpoints',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('endpoints_order');
  },
};
