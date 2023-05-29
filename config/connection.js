const {connect, connection } = require("mongoose");
require("dotenv").config();

if (!process.env.MONGODB_URI) {
    throw Error("DB Connection Not Known");
}

connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;