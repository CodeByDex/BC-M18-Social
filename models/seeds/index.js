const connection = require("../../config/connection");
const {User} = require("../../models");

connection.on("error", (err) => console.log(err));

connection.once("open", async () => {
    await User.deleteMany({});

    await User.create({
        username: "Test ",
        email: "test@test.test"
    })

    await User.create({
        username: "Test2 ",
        email: "test2@test.test"
    });

    process.exit(0);
});