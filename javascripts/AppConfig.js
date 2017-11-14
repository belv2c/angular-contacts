"use strict";

//runs one time per application after the app config
app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});


app.config(function($routeProvider){
	$routeProvider
		.when("/contacts/favorites", {
			// path to html file and path to javascript file
			templateUrl: 'partials/contacts/favorites.html',
			controller: 'FavoritesCtrl'
		})
		.when("/contacts/new", {
			// path to html file and path to javascript file
			templateUrl: 'partials/contacts/new.html',
			controller: 'NewCtrl'
		})
		.when("/contacts/view", {
			// path to html file and path to javascript file
			templateUrl: 'partials/contacts/view.html',
			controller: 'ViewCtrl'
		})
		.when("/login", {
			// path to html file and path to javascript file
			templateUrl: 'partials/login.html',
			controller: 'LoginCtrl'
		})
		// if your user tries to type in any other route besides what you've defined you can redirect them
		.otherwise('/login');
});