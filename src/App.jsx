import Header from './components/header/Header';
import MainContainer from './components/main-container/MainContainer';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<MainContainer />
		</>
	);
};

export default App;
