"use strict";

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactService) {
	$scope.contacts = [];

	$scope.submitContactsForm = () => {
	
		ContactService.getAllTheContacts($rootScope.uid).then((results) => {
			$scope.contacts = results;
			$location.path("/contacts/view");
		}).catch((err) => {
			console.log("error in addContact", err);
		});
	};
});




