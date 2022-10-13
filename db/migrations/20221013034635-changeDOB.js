"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "dob");
    await queryInterface.addColumn("Users", "date", Sequelize.INTEGER);
    await queryInterface.addColumn("Users", "month", Sequelize.INTEGER);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "dob", Sequelize.DATE);
    await queryInterface.removeColumn("Users", "date");
    await queryInterface.removeColumn("Users", "month");
  },
};
