"use strict";

app.controller("EditCtrl", function($location, $rootScope, $routeParams, $scope, ContactService) {
	
const getContacts = () => {
		ContactService.getOneContact($routeParams.id).then((results) => {
			$scope.contact = results.data;
		}).catch((err) => {
			console.log("error in getContacts", err);
		});
	};

	$scope.submitForm = (contact) => {
		let updatedContact = {
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
		
		ContactService.updateContact(updatedContact, $routeParams.id).then((results) => {
			$location.path("/contacts/view");
		}).catch((err) => {
			console.log("error in submitForm", err);
		});
	};
	getContacts();
});