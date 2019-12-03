module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('endpoints_fields', {
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
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('endpoints_fields');
  },
};
