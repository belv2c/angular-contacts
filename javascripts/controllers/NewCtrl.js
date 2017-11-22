"use strict";

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactService) {

	$scope.submitContactsForm = (newContact) => {
		newContact = $rootScope.uid;
		ContactService.addNewContact(newContact).then((results) => {
			$location.path("/contacts/view");
		}).catch((err) => {
			console.log("error in addContact", err);
		});
	};
});