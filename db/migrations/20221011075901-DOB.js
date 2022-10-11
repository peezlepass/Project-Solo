module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "dob", Sequelize.DATE);
    await queryInterface.addColumn("Users", "lat", Sequelize.DECIMAL);
    await queryInterface.addColumn("Users", "lng", Sequelize.DECIMAL);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "dob");
    await queryInterface.removeColumn("Users", "lat");
    await queryInterface.removeColumn("Users", "lng");
  },
};
