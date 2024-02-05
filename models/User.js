import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongo_url = process.env.mongo_url;
// console.log(mongo_url);

mongoose.connect(mongo_url);

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	images: [{ type: mongoose.Schema.Types.ObjectId, ref: "Images" }],
});

const User = mongoose.model("User", userSchema);

export default User;
