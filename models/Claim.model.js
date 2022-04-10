const mongoose = require("mongoose");

const claimSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

const Claim = mongoose.model("Claim", claimSchema);

module.exports = Claim;
