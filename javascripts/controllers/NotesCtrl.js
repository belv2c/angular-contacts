"use strict";

app.controller("NotesCtrl", function($location, $rootScope, $routeParams, $scope, ContactService) {
	
const getContacts = () => {
		ContactService.getOneContact($routeParams.id).then((results) => {
			$scope.contact = results.data;
		}).catch((err) => {
			console.log("error in getContacts", err);
		});
	};

	$scope.submitForm = (contact) => {
		let updatedContact = {
			"firstName": $scope.newcontact.firstName,
			"lastName": $scope.newcontact.lastName,
			"address": $scope.newcontact.address,
			"phoneNumber": $scope.newcontact.phoneNumber,
			"email": $scope.newcontact.email,
			"birthday": $scope.newcontact.birthday,
			"nickName": $scope.newcontact.nickName,
			"note": $scope.newcontact.note,
			"user_id": $rootScope.uid,
			"favorite": false
		};
		
		ContactService.updateContact(contact, $routeParams.id).then((results) => {
			updatedContact = ContactService.createContactObject(contact);
			$location.path("/contacts/view");
			
		}).catch((err) => {
			console.log("error in submitForm", err);
		});
	};
	getContacts();
});