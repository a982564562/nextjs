import Header from "./Header";
import Footer from "./Footer1";

export default ({ children }) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
);
