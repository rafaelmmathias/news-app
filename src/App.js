import Layout from './layout';
import NewsList from './screens/NewsList';
import ThemeProvider from './theme';

export const RootApp = ({ children }) => (
	<ThemeProvider>
		<Layout>{children}</Layout>
	</ThemeProvider>
);

function App() {
	return (
		<RootApp>
			<NewsList />
		</RootApp>
	);
}

export default App;
