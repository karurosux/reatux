import React from 'react';
import { Provider } from 'react-redux';
import store from './app.store';
import AppRouter from './app.router';

class App extends React.Component {
	render() {
		return (
			<Provider store={store.store}>
				<AppRouter history={store.history} />
			</Provider>
		);
	}
}
export default App;
