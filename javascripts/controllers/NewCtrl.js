"use strict";

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactService) {
	$scope.submitForm = (user) => {
		$scope.user.uid = $rootScope.uid;
		ContactService.postNewContact(user).then((results) => {
			$location.path("/contacts/view");
		}).catch((err) => {
			console.log("error in postNewContact", err);
		});
	};
});