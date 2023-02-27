import { type NextPage } from "next";
import { setCookie } from "cookies-next";

const Login: NextPage = () => {
	const setPass = () => {
		const pass = (document.getElementById("passBox") as HTMLInputElement)
			.value;
		if (pass && pass.length > 0) {
			setCookie("dashpass", pass);
			window.open("/dash", "_self");
		}
	};

	return (
		<div className="h-screen pt-[100px]">
			<h1 className="font-sans text-6xl font-black">Login</h1>
			<br />
			<input
				id="passBox"
				className="form-input rounded"
				placeholder="Password"
			></input>
			<br />
			<br />
			<button
				className="rounded bg-black p-2 text-white"
				onClick={() => setPass()}
			>
				Submit
			</button>
		</div>
	);
};

export default Login;
