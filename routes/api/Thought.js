const router = require("express").Router();
const thoughtController = require("../../controllers/Thought");

router.route("/")
    .get(thoughtController.getThoughts)
    .post(thoughtController.createThought);

router.route("/:thoughtID")
    .get(thoughtController.getSingleThought)
    .put(thoughtController.updateThought)
    .delete(thoughtController.deleteThought);

module.exports = router;