"use client";
import React, { useCallback, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const inputClasses =
	"text-black w-full py-1.5 px-2 rounded outline-none focus:outline-stone-500 -outline-offset-2";

const buttonClasses =
	"mt-4 bg-white font-bold w-full text-black rounded-md py-2 transition-all transform hover:bg-emerald-500 active:translate-y-0.5 shadow-none";

const page = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleSubmit = useCallback(
		async (e) => {
			e.preventDefault();
			// console.log("Username:", formData.username);
			// console.log("Password:", formData.password);

			try {
				const { data } = await axios.post(
					"http://localhost:3000/login/api",
					{
						username: formData.username,
						password: formData.password,
					},
					{ headers: { "Content-Type": "application/json" } }
				);

				console.log(data);
				router.push("/dashboard");

				setFormData({
					username: "",
					password: "",
				});
			} catch (error) {
				console.log(error);
			}

			setFormData({
				username: "",
				password: "",
			});
		},
		[formData]
	);

	const handleChange = useCallback((e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}, []);
	return (
		<div className="bg-black text-white px-8 py-6 rounded-lg border-white mx-auto w-fit shadow-lg shadow-stone-900 flex flex-col gap-8 items-center">
			<h1 className="font-sans text-4xl font-bold">Login 🔒</h1>
			<p className="font-sans font-semibold text-stone-400">
				Enter your credentials to access your account
			</p>
			<form
				// method="post"
				// action="/"
				onSubmit={handleSubmit}
				className="font-semibold w-full font-sans text-left flex flex-col gap-4"
			>
				<label htmlFor="username" className="w-full">
					Username
				</label>
				<input
					type="text"
					id="username"
					name="username"
					onChange={handleChange}
					value={formData.username}
					className={`${inputClasses}`}
					placeholder="Enter your username"
					required
				/>
				<label htmlFor="password" className="w-full">
					Password
				</label>
				<input
					type="password"
					id="password"
					name="password"
					onChange={handleChange}
					value={formData.password}
					className={`${inputClasses}`}
					placeholder="Enter your password"
					required
				/>
				<button className={`${buttonClasses}`}>Login 🔏</button>
			</form>
			<p>
				Don't have an account?{" "}
				<Link className="underline underline-offset-2" href="/signup">
					Signup
				</Link>
			</p>
		</div>
	);
};

export default page;
