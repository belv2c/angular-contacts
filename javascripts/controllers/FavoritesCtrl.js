"use strict";

app.controller("FavoritesCtrl", function($rootScope, $scope, ContactService) {
	const getContacts = () => {
		ContactService.getFavorites($rootScope.uid).then((results) => {
			$scope.contacts = results;
		}).catch((err) => {
			console.log("error in getContacts", err);
		});
	};
	getContacts();
});