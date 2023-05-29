const connection = require("../../config/connection");
const {User} = require("../../models");

connection.on("error", (err) => console.log(err));

connection.once("open", async () => {
    await User.deleteMany({});

    const users = [];

    users.push({
        username: "Test",
        email: "test@test.test"
    });

    users.push({
        username: "Test2",
        email: "test2test.test"
    });

    await User.collection.insertMany(users);

    process.exit(0);
});