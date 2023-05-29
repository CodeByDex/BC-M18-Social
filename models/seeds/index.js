const connection = require("../../config/connection");
const {User} = require("../../models");
const { Thought } = require("../Thought");

connection.on("error", (err) => console.log(err));

connection.once("open", async () => {
    await seedUsers();

    await seedThoughts();

    process.exit(0);
});

async function seedUsers() {
    await User.deleteMany({});

    await User.create({
        username: "Test ",
        email: "test@test.test"
    });

    await User.create({
        username: "Test2 ",
        email: "test2@test.test"
    });
}

async function seedThoughts() {
    await Thought.deleteMany({});

    await Thought.create({
        thoughtText: "Test thought Text",
        username: "TestUserName"
    });

    await Thought.create({
        thoughtText: "Test 2 thought text",
        username: "TestSomeOtherUser",
        reactions: [{
            reactionBody: "Body",
            username: "CommentUser"
        }]
    });
}
