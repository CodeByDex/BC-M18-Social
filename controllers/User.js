const User = require("../models/User");

async function createUser(req, res) {
    const newUser = await User.create(req.body);

    res.json(newUser);
}
async function getUsers(req, res) {
    const users = await User.find();

    res.json(users);
}
async function getSingleUser(req, res) {
    const user = await User.findOne({
        _id: req.params.userID
    });

    if(!user) {
        res.status(404).json({message: "No user with that ID"});
    } else {
        res.json(user);
    }
}
async function updateUser(req, res) {
    const updatedUser = await User.findByIdAndUpdate({
        _id: req.params.userID
    },
    req.body,
    {new:true})

    res.json(updatedUser);
}
async function deleteUser(req, res) {
    const deletedUser = await User.deleteOne({
        _id: req.params.userID
    });

    res.json(deletedUser);
}

module.exports = {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser
}