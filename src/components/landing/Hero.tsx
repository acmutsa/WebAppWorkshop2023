import { type FunctionComponent } from "react";
import GitHubCalendar from "react-github-calendar";
import { SiGithub } from "react-icons/si";

const Nav: FunctionComponent = () => {
	return (
		<section className="mx-auto grid min-h-screen w-full max-w-[1500px] grid-cols-2 px-5">
			<div className="flex flex-col justify-center">
				<h1 className="font-sans text-8xl font-black text-white">
					Liam Murray
				</h1>
				<p className="font-sans text-2xl font-black text-blue-500">
					Software Developer
				</p>
			</div>
			<div className="relative flex items-center justify-center">
				<div className="absolute top-[20%] h-[64px] w-[600px] -rotate-45 rounded-full bg-blue-500"></div>
				<div className="absolute top-[40%] h-[64px] w-[600px] -rotate-45 rounded-full bg-blue-500"></div>
				<div className="absolute top-[60%] h-[64px] w-[600px] -rotate-45 rounded-full bg-blue-500"></div>
				<div className="absolute top-[80%] h-[64px] w-[600px] -rotate-45 rounded-full bg-blue-500"></div>
				<div className="relative flex aspect-video w-full flex-col justify-center rounded-xl border-8 border-stone-800 bg-stone-700 p-2">
					<h2 className="flex items-center font-sans font-bold text-white">
						<SiGithub className="mr-[2px]" />
						Contributions
					</h2>
					<div className="rounded bg-stone-800 p-2 py-5">
						<GitHubCalendar
							username="Lermatroid"
							style={{ color: "white" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Nav;
