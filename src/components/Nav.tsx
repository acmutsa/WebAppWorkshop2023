import { FunctionComponent } from "react";
import Link from "next/link";

const Nav: FunctionComponent = () => {
	return (
		<div className="fixed z-10 w-full border-b-2 border-b-blue-500 bg-stone-800">
			<div className="mx-auto grid h-[64px] w-full max-w-[1800px] grid-cols-2 px-5">
				<div className="flex items-center">
					<Link
						href="/"
						className="text-whtie font-sans text-3xl font-black text-white"
					>
						Liam Murray
					</Link>
				</div>
				<div className="flex items-center justify-end">
					<Link
						className="ml-5 font-sans font-bold text-white"
						href="/"
					>
						Home
					</Link>
					<Link
						className="ml-5 font-sans font-bold text-white"
						href="/"
					>
						Blog
					</Link>
					<Link
						className="ml-5 font-sans font-bold text-white"
						href="/"
					>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
