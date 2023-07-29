import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
},
{timestamps: true} //to get the time when the user was created and updated
);
export default mongoose.models.User ||  mongoose.model("User", userSchema)