const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: /[a-z0-9]@[a-z0-9].[a-z0-9]/i,
            validate: {
                validator: (val) => {
                    return /[a-z0-9]@[a-z0-9].[a-z0-9]/i.test(val);
                }
            }
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

// userSchema
//     .virtual("friendCount")
//     .get(() => {
//         return this.friends.length
//     });

const User = model("user", userSchema);

module.exports = User;