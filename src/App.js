import Layout from './layout';
import NewsList from './screens/NewsList';
import ThemeProvider from './theme';

function App() {
	return (
		<ThemeProvider>
			<Layout>
				<NewsList/>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
