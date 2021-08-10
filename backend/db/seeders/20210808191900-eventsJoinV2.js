"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Event_Joins",
      [
        {
          userId: 1,
          eventId: 2,
        },
        {
          userId: 1,
          eventId: 3,
        },
        {
          userId: 1,
          eventId: 4,
        },
        {
          userId: 1,
          eventId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Event_Joins", null, {});
  },
};
