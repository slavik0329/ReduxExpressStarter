import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Index from './containers/Index';
import UsersPage from './containers/UsersPage';
import LoginPage from './containers/LoginPage';
import App from './containers/App';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Index} />
		<Route path="/users" component={UsersPage} />
		<Route path="/login" component={LoginPage} />
		<Route path="*" component={Index}/>

	</Route>
);