"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * created a demo user with the password 'password'.
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Demo_Lition",
          email: "demolition@email.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Here we are removing all users
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
