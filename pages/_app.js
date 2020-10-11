import '../styles/global.scss';
import SEO from '../components/seo';

export default function App({Component, pageProps}) {
	return (
		<>
			<SEO />
			<Component {...pageProps} />
		</>
	);
}
