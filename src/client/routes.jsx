import React from 'react';

import { Route } from 'react-router';

// Load this component for ALL routes
import Application from './Components/Application';

// lists ALL todo items
import IndexPage from './Pages/IndexPage';


import ResultsPage from './Components/ResultsPage';

import SearchPage from './Components/Search/SearchPage';

import HotelSearchPage from './Components/Hotels/HotelSearchPage';

import LoginPage from './Components/Login/LoginPage';

import RegistrationPage from './Components/Registration/RegistrationPage';

export default (

	<Route component={Application}>

		<Route path="/" component={IndexPage} />


		<Route path="/sky" component={ResultsPage}/>

		<Route path="/search" component={SearchPage}/>

		<Route path="/hotelSearch" component={HotelSearchPage}/>

		<Route path="/login" component={LoginPage}/>

		<Route path="/register" component={RegistrationPage}/>

	</Route>
);