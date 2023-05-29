const Thought = require("../models/Thought");

async function createThought() {}
async function getThoughts(req, res) {
    const thoughts = await Thought.find();

    res.json(thoughts);
}
async function getSingleThought(req, res) {
    const thought = await Thought.findOne({
        _id: req.params.thoughtID
    });

    if(!thought) {
        res.status(404).json({message: "No thought with that ID"});
    } else {
        res.json(thought);
    }
}
async function updateThought() {}
async function deleteThought() {}

module.exports = {
    createThought,
    getThoughts,
    getSingleThought,
    updateThought,
    deleteThought
}