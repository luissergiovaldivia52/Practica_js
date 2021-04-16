import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import About from './components/About.jsx';

import ciudad from './components/Ciudad';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={App} />
			<Route path="/about" component={About} />
			<Route path="/ciudad/:ciudad" component={ciudad} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
