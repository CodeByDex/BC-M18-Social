const Thought = require("../models/Thought");

async function createThought(req, res) {
    const newThought = await Thought.create(req.body);

    res.json(newThought);
}
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
async function updateThought(req, res) {
    const updatedThought = await Thought.findOneAndUpdate({
        _id: req.params.thoughtID
    }, 
    req.body,
    {new:true});

    res.json(updatedThought);
}
async function deleteThought(req, res) {
    const deleteThought = await Thought.deleteOne({
        _id: req.params.thoughtID
    });

    res.json(deleteThought);
}

module.exports = {
    createThought,
    getThoughts,
    getSingleThought,
    updateThought,
    deleteThought
}