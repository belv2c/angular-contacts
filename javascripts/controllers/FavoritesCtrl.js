"use strict";

app.controller("FavoritesCtrl", function($location, $rootScope, $scope, ContactService) {
	const getContacts = () => {
		ContactService.getFavorites($rootScope.uid).then((results) => {
			$scope.contacts = results;
		}).catch((err) => {
			console.log("error in getContacts", err);
		});
		
	};


$scope.deleteContact = (userId) => {
		ContactService.deleteContact(userId).then((results) => {
			getContacts();
		}).catch((err) => {
			console.log("error in deleteContact", err);
		});
	};


$scope.editContact = (userId) => {
	$location.path(`/contacts/edit/${userId}`);
};

$scope.contactDetail = (userId) => {
	$location.path(`/contacts/detail/${userId}`);
};

getContacts();

});