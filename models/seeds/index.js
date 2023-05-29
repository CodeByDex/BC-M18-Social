const connection = require("../../config/connection");
const {User, Thought} = require("../../models");

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
        email: "test@test.test",
        friends: []
    });

    await User.create({
        username: "Test2 ",
        email: "test2@test.test",
        friends: []
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
