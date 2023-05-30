const router = require("express").Router();
const userController = require("../../controllers/User");

router.route("/")
    .get(userController.getUsers)
    .post(userController.createUser);

router.route("/:userID")
    .get(userController.getSingleUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;