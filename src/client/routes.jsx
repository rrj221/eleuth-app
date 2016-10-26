import React from 'react';

import { Route } from 'react-router';

// Load this component for ALL routes
import Application from './Components/Application';

// lists ALL todo items
import IndexPage from './Pages/IndexPage';


import ResultsPage from './Components/ResultsPage';

import HotelResults from './Components/HotelSearch/HotelResults.js'

import SearchPage from './Components/Search/SearchPage';

import HotelSearchPage from './Components/HotelSearch/HotelSearchPage';

// import LoginPage from './Components/Login/LoginPage';

// import RegistrationPage from './Components/Registration/RegistrationPage';

import ProfilePage from './Components/Profile/ProfilePage';

export default (

	<Route component={Application}>

		<Route path="/" component={IndexPage} />

		<Route path="/sky" component={ResultsPage}/>

		<Route path="/search" component={SearchPage}/>

		<Route path="/hotelSearch" component={HotelSearchPage}/>

		<Route path="/profile" component={ProfilePage}/>

		<Route path='/hotelResults' component={HotelResults}/>


	</Route>
);

		// <Route path="/login" component={LoginPage}/>

		// <Route path="/register" component={RegistrationPage}/>