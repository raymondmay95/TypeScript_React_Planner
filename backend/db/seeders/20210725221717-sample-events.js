"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Events",
      [
        {
          description: "This is a test event",
          urls: JSON.stringify({ data: "test.url" }),
          eventDate: Sequelize.fn("now"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Events");
  },
};
