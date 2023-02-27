import { type FunctionComponent } from "react";
import Balancer from "react-wrap-balancer";
import {
	SiNextdotjs,
	SiReact,
	SiTypescript,
	SiJavascript,
	SiPostgresql,
	SiTailwindcss,
	SiHtml5,
	SiCss3,
	SiPrisma,
} from "react-icons/si";

const About: FunctionComponent = () => {
	return (
		<section className="mx-auto grid min-h-screen w-full max-w-[1500px] grid-cols-2 border-t-2 border-dotted border-t-blue-500 px-5">
			<div className="flex flex-col justify-center font-sans text-white">
				<h1 className="mb-5 font-sans text-6xl font-black">
					Hello There 👋
				</h1>
				<p className="max-w-[600px] font-extrabold leading-7">
					<Balancer>
						These are some technologies I use, followed by lispum.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</Balancer>
				</p>
			</div>
			<div className="flex items-center justify-center">
				<div className="grid aspect-square w-full max-w-[600px] grid-cols-3 text-blue-500">
					<div>
						<SiTypescript className="text-9xl" />
					</div>
					<div>
						<SiReact className="text-9xl" />
					</div>
					<div>
						<SiNextdotjs className="text-9xl" />
					</div>
					<div>
						<SiPostgresql className="text-9xl" />
					</div>
					<div>
						<SiTailwindcss className="text-9xl" />
					</div>
					<div>
						<SiJavascript className="text-9xl" />
					</div>
					<div>
						<SiHtml5 className="text-9xl" />
					</div>
					<div>
						<SiCss3 className="text-9xl" />
					</div>
					<div>
						<SiPrisma className="text-9xl" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
