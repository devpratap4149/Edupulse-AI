const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: true,
        } ,

        title: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            default: "Achievement",
        },

        description: {
            type: String,
            required: true,
        }, 

        verifiedBy: {
            type: String,
            default: "Institution",
        },

        status: {
            type: String,
            enum: ["Verified", "Pending"],
            default: "Verified",
        },
    },

    {timestamps: true}
);

module.exports = mongoose.model("Skill", skillSchema);