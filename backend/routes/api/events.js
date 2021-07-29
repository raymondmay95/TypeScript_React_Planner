const express = require("express");
const asyncHandler = require("express-async-handler");

const { Event_Join } = require("../../db/models");

const router = express.Router();

router.get(
  "/:userId",
  asyncHandler(async (req, res, next) => {
    const userId = req.params;
    console.log(userId);

    const events = await Event_Join.getEvents(userId);
    res.json(events);
  })
);

module.exports = router;
