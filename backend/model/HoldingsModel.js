const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema);    // It create a mongoose model name Holdingmodel based on the Schema called Holdig Schema.

module.exports = { HoldingsModel };

















// Note -> We have define the model because this is the place where we perform all the operations like as save, update,store the data. All these data will store according the format of our Schema which we have provided in the Schema