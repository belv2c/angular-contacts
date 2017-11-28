"use strict";

app.controller("FavoritesCtrl", function($location, $rootScope, $scope, ContactService) {
	

	const getContacts = () => {
		ContactService.getFavorites($rootScope.uid).then((results) => {
			$scope.contacts = results;
			console.log(results);
		}).catch((err) => {
			console.log("error in getContacts", err);
		});
		
	};

getContacts();

$scope.deleteContact = (contactId) => {
		ContactService.deleteContact(contactId).then((results) => {
			getContacts();
		}).catch((err) => {
			console.log("error in deleteContact", err);
		});
	};


$scope.editContact = (contactId) => {
	$location.path(`/contacts/edit/${contactId}`);
};

$scope.contactDetail = (contactId) => {
	$location.path(`/contacts/detail/${contactId}`);
};


});