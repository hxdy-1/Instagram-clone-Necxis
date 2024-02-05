import User from "../../../models/User";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const POST = async (err, req, res, next) => {
	try {
		// Extract username and password from request body
		const { username, password } = req.body;

		// Check if the user already exists
		const existingUser = await User.findOne({ username });

		// If user already exists, return an error
		if (existingUser) {
			return res.status(400).json({
				error: "User already exists",
			});
		}

		// Create a new user
		const newUser = await User.create({ username, password });

		// Generate a JWT token for the newly created user
		const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
			expiresIn: "1h", // Token expires in 1 hour
		});

		// Return success message and token
		return res.status(200).json({
			message: "User created successfully",
			token,
		});
	} catch (error) {
		console.error("Error creating user:", error);
		return res.status(500).json({
			error: "Internal server error",
		});
	}
};
