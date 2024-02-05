import { NextResponse } from "next/server";

export const POST = async (req, res) => {
	const requestBody = await req.json();

	console.log("Login worked");
	console.log(requestBody);

	return NextResponse.json({ message: "Login worked" });
};
