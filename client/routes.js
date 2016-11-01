import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Index from './containers/Index';
import UsersPage from './containers/UsersPage';

export default (
	<Route path="/">
		<IndexRoute component={Index} />
		<Route path="/users" component={UsersPage} />
	</Route>
);