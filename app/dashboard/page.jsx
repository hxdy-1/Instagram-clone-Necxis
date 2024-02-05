"use client";
import React, { useState } from "react";

const page = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [filePath, setFilePath] = useState();

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file && file.size > 5 * 1024 * 1024) {
			// 5MB limit
			setErrorMessage(
				"File size exceeds 5MB. Please choose a smaller file."
			);
		} else {
			setErrorMessage("");
			setFilePath(URL.createObjectURL(e.target.files[0]));
			// Proceed with file upload
			console.log(file);
		}
	};

	return (
		<form className="flex flex-col gap-4 items-center ">
			<label
				htmlFor="img"
				className="bg-black text-white font-semibold px-4 py-2 rounded-lg shadow-xl cursor-pointer"
			>
				Choose an image
			</label>
			<input
				type="file"
				id="img"
				name="img"
				accept="image/*"
				onChange={handleFileChange}
				className="hidden"
			/>
			<img
				src={filePath}
				alt="chosen image will appear here"
				className="w-20 h-20"
			/>
			{errorMessage && <p className="text-red-500">{errorMessage}</p>}
			<textarea
				className="border-solid border-2 border-black outline-black shadow-xl"
				name="description"
				id="description"
				cols="30"
				rows="5"
			/>
		</form>
	);
};

export default page;
