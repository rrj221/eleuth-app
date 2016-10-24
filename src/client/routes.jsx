import React from 'react';

import { Route } from 'react-router';

// Load this component for ALL routes
import Application from './Components/Application';

// lists ALL todo items
import IndexPage from './Pages/IndexPage';


import ResultsPage from './Components/ResultsPage';

import SearchPage from './Components/Search/SearchPage';

import LoginPage from './Components/Login/LoginPage';

export default (

	<Route component={Application}>

		<Route path="/" component={IndexPage} />


		<Route path="/sky" component={ResultsPage}/>

		<Route path="/search" component={SearchPage}/>

		<Route path="/login" component={LoginPage}/>


	</Route>
);