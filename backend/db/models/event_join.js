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
    Event_Join.hasOne(models.User);
    Event_Join.hasMany(models.Event);
  };

  Event_Join.getEvents = async function ({ userId }) {
    let eventList = await Event_Join.findAll({
      where: {
        userId,
      },
      attributes: ["id", "eventId", "userId", "createdAt", "updatedAt"],
    });
    return eventList;
  };

  return Event_Join;
};
