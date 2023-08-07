const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SizeChartSchema = new Schema(
  {
    topType: {
      type: String,
    },
    bottomType: {
      type: String,
    },
    note: {
      type: String,
    },
    tops: {
      chest: {
        type: Number,
      },
      waist: {
        type: Number,
      },
      hip: {
        type: Number,
      },
      end: {
        type: Number,
      },
      shoulder: {
        type: Number,
      },
      armHole: {
        type: Number,
      },
      sleeveLength: {
        type: Number,
      },
      muscle: {
        type: Number,
      },
      handOpening: {
        type: Number,
      },
      length: {
        type: Number,
      },
      slit: {
        type: Number,
      },
      neckDeepf: {
        type: Number,
      },
      neckDeepb: {
        type: Number,
      },
      halfBody: {
        type: Number,
      },
    },
    bottom: {
      length: {
        type: Number,
      },
      waist: {
        type: Number,
      },
      hip: {
        type: Number,
      },
      thigh: {
        type: Number,
      },
      knee: {
        type: Number,
      },
      legOpening: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

const SizeChart = mongoose.model("SizeChart", SizeChartSchema);
module.exports = SizeChart;
