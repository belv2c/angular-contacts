"use strict";


// calls isAuthenticated in AuthService and wraps the call in a function
// if isAuthenticated = true it resolves and if false it rejects
let isAuth = (AuthService) => new Promise ((resolve, reject) => {
	if (AuthService.isAuthenticated()){
		resolve();
	} else {
		reject();
	}
});

//runs one time per application after the app config
app.run(function( $rootScope, $location, FIREBASE_CONFIG, AuthService, ContactService){
	firebase.initializeApp(FIREBASE_CONFIG);



$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
	var logged = AuthService.isAuthenticated();
	
	var appTo;

	if (currRoute.originalPath) {
		appTo = currRoute.originalPath.indexOf('/login') !== -1;
	}

	if (!appTo && !logged) {
		event.preventDefault();
		$location.path('/login');
	}
	});
});


app.config(function($routeProvider){
	$routeProvider
		.when("/login", {
			// path to html file and path to javascript file
			templateUrl: 'partials/login.html',
			controller: 'LoginCtrl'
		})
		.when("/contacts/favorites", {
			// path to html file and path to javascript file
			templateUrl: 'partials/contacts/favorites.html',
			controller: 'FavoritesCtrl',
			resolve: {isAuth}
		})
		.when("/contacts/new", {
			// path to html file and path to javascript file
			templateUrl: 'partials/contacts/new.html',
			controller: 'NewCtrl',
			resolve: '{isAuth}'
		})
		.when("/contacts/view", {
			// path to html file and path to javascript file
			templateUrl: 'partials/contacts/view.html',
			controller: 'ViewCtrl',
			resolve: '{isAuth}'
		})
		.when("/contacts/edit/:id", {
			// path to html file and path to javascript file
			templateUrl: 'partials/contacts/edit.html',
			controller: 'EditCtrl',
			resolve: '{isAuth}'
		})
		.when("/contacts/detail/:id", {
			// path to html file and path to javascript file
			templateUrl: 'partials/contacts/detail.html',
			controller: 'DetailCtrl',
			resolve: '{isAuth}'
		})
		
		// if your user tries to type in any other route besides what you've defined you can redirect them
		.otherwise('/login');
});