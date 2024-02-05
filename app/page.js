import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-black text-xl font-semibold text-white w-fit mx-auto p-6 flex flex-col gap-4 rounded-xl shadow-2xl">
			<Link href="/login" className="mx-auto text-center block">
				Login
			</Link>
			<Link href="/signup" className="mx-auto text-center block">
				Sign Up
			</Link>
		</div>
	);
}
