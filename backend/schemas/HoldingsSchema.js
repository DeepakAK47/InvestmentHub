const {Schema} = require("mongoose");

const HoldingsSchema = new Schema({
    name : String,
    qty : Number,
    avg : Number,
    price : Number,
    net : String,
    day : String,
})

module.exports = {HoldingsSchema};

// Note -> We make shema because it provide us the structure or the blue print of  all those datas which we are goign to store in our mongoDB.