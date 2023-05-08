/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TrustedParties', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      country: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      thumbprint: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      rawData: {
        type: Sequelize.STRING(4096),
        allowNull: false,
      },
      signature: {
        type: Sequelize.STRING(6000),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('TrustedParties');
  },
};
