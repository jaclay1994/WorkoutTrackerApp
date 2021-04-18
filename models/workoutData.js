const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const workoutDataSchema = new Schema({
    name: {
        type: String,
        required: "Enter your name."
    },
    type: {
        type: String,
        trim: true,
        required: "Choose cardio or resistance."
    },
    distance: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    }
});

const WorkoutData = mongoose.model("WorkoutData", workoutDataSchema);

module.exports = WorkoutData;