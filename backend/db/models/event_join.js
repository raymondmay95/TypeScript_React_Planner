module.exports = (sequelize, DataTypes) => {
  const Event_Join = sequelize.define("Event_Join", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Events",
        key: "id",
      },
    },
  });
  Event_Join.associate = function (models) {
    // associations can be defined here
    // Event_Join.hasMany(models.User);
    // Event_Join.belongsTo(models.Event);
  };

  Event_Join.getEvents = async function (userId) {
    let eventList = await Event_Join.findAll({
      where: {
        userId,
      },
      attributes: ["eventId"],
      order: [["updatedAt", "ASC"]],
    });

    const eventIds = eventList.map((event) => event.eventId);
    return eventIds;
  };

  return Event_Join;
};
