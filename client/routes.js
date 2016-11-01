import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.js';

export default (
	<Route path="/">
		<IndexRoute component={App} />
		<Route path="/dicks" component={App} />
	</Route>
);