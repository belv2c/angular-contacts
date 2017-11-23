"use strict";

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactService) {
	$scope.contacts = [];

	$scope.submitContactsForm = function () {
		
		ContactService.addNewContact($rootScope.uid).then((results) => {
			$scope.contacts = results;
			$location.path("/contacts/view");
		}).catch((err) => {
			console.log("error in addContact", err);
		});
	};
});