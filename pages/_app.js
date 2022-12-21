import { AppContextProvider } from "../contexts/AppContext";
import { ModalContextProvider } from "../contexts/ModalContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ModalContextProvider>
			<AppContextProvider>
				<Component {...pageProps} />
			</AppContextProvider>
		</ModalContextProvider>
	);
}

export default MyApp;
