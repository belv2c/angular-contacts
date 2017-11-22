"use strict";

app.controller("NewCtrl", function($http, $location, $scope, ContactService) {
	$scope.getNewContact = () => {
		ContactService.addNewContact(newContact).then((results) => {
			$location.path("/contacts/view");
		}).catch((err) => {
			console.log("error in addContact", err);
		});
	};
});