const express = require("express");
const asyncHandler = require("express-async-handler");

const { Event_Join, Event } = require("../../db/models");

const router = express.Router();

router.get(
  "/:userId",
  asyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const eventIds = await Event_Join.getEvents(userId);
    const events = await Event.getEvents(eventIds);
    return res.json(events);
  })
);

module.exports = router;
