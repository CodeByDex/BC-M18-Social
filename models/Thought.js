const {Schema, model, Types} = require("mongoose");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            required: true,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            max_length: 280,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now,
            get: (val) => {
                return val.toLocaleString();
            }
        }
    },
    {
        toJSON: {
            getters: true
        },
        _id: false
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now,
            get: (val) => {
                return val.toLocaleString();
            }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

thoughtSchema
    .virtual("reactionCount")
    .get(function(){
        return this.reactions.count;
    });

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;