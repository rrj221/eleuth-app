import React from 'react';

import { Route } from 'react-router';

// Load this component for ALL routes
import Application from './Components/Application';

// lists ALL todo items
import IndexPage from './Pages/IndexPage';

// lists just ACTIVE todo items (not-completed)
import ActivePage from './Pages/ActivePage';

// lists only COMPLETED items
import CompletedPage from './Pages/CompletedPage';

import ResultsPage from './Components/ResultsPage';

import SearchPage from './Components/Search/SearchPage';

import LoginPage from './Components/Login/LoginPage';

import RegistrationPage from './Components/Registration/RegistrationPage';

export default (
	/* This means the Application component 
		is gonna be the parent of all components nested w/in this route! */
	<Route component={Application}>

		{/* when the address bar shows /#/, render the IndexPage component */}
		<Route path="/" component={IndexPage} />
		{/* when the address bar shows /#/completed, render the CompletedPage component */}
		<Route path="/completed" component={CompletedPage} />
		{/* ... */}
		<Route path="/active" component={ActivePage} />

		<Route path="/sky" component={ResultsPage}/>

		<Route path="/search" component={SearchPage}/>

		<Route path="/login" component={LoginPage}/>

		<Route path="/register" component={RegistrationPage}/>

	</Route>
);