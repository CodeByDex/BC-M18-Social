const User = require("../models/User");

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
async function createUser() {}
async function updateUser() {}
async function deleteUser() {}

module.exports = {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser
}