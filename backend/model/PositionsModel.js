const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema");    // Note -> We are importing schema here not model because we are creating model here.

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };