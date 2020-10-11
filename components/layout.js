import Footer from './footer';

export default function Layout({children, pageTitle, ...props}) {
	return (
		<>
			<main>{children}</main>

			<Footer />
		</>
	);
}
