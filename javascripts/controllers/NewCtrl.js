"use strict";

app.controller("NewCtrl", function($http, $location, $rootScope, $scope, ContactService) {
	$scope.newcontact = {};

	$scope.submitForm = () => {
		let newContact = {
			"firstName": $scope.newcontact.firstname,
			"lastName": $scope.newcontact.lastname,
			"address": $scope.newcontact.address,
			"phoneNumber": $scope.newcontact.phonenumber,
			"email": $scope.newcontact.email,
			"birthday": $scope.newcontact.birthday,
			"nickName": $scope.newcontact.nickname,
			"user_id": $rootScope.uid,
			"favorite": false
		};
		
		ContactService.addNewContact(newContact).then((results) => {
			$location.path("/contacts/view");
		}).catch((err) => {
			console.log("error in addContact", err);
		});
	};
});