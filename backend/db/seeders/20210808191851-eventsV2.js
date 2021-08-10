"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Events",
      [
        {
          description: "This is a test event (2)",
          urls: JSON.stringify({ data: "test.url" }),
          eventDate: Sequelize.fn("now"),
        },
        {
          description: "This is a test event (3)",
          urls: JSON.stringify({ data: "test.url" }),
          eventDate: Sequelize.fn("now"),
        },
        {
          description: "This is a test event (4)",
          urls: JSON.stringify({ data: "test.url" }),
          eventDate: Sequelize.fn("now"),
        },
        {
          description: "This is a test event (5)",
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
