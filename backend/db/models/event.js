"use strict";
const { Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          include: ["createdAt", "updatedAt"],
        },
      },
      scopes: {},
    }
  );
  Event.associate = function (models) {
    // associations can be defined here
    Event.belongsToMany(models.User, { through: models.Event_Join });
  };

  Event.getEvents = async function (eventIds) {
    const events = await Event.findAll({
      where: {
        id: {
          [Op.in]: eventIds,
        },
      },
      order: [["updatedAt", "DESC"]],
    });
    return events;
  };

  return Event;
};
