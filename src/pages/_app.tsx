import { type AppType } from "next/dist/shared/lib/utils";
import Nav from "~/components/Nav";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<Nav />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
