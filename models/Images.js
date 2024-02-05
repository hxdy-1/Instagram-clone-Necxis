import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongo_url = process.env.mongo_url;

console.log(mongo_url);

mongoose.connect(mongo_url);

const imageSchema = new mongoose.Schema({
	filename: String, // Name of the image file
	path: String, // Path to the image file on the server
	description: String, // Optional description for the image
	owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the user who uploaded the image
	likes: { type: Number, default: 0 }, // Number of likes for the image (default to 0)
	comments: [{ type: String }], // Array of strings to store comments on the image
});

const Images = mongoose.model("Images", imageSchema);

export default Images;
