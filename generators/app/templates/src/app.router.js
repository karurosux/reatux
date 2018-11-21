import React from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import WelcomeContainer from './containers/welcome/welcome.container';

const AppRouter = (props) => (
	<Router history={props.history}>
		<Switch>
			<Route path="/welcome-screen" component={WelcomeContainer} />
			<Redirect from="/" to="/welcome-screen" />
		</Switch>
	</Router>
);

export default AppRouter;
