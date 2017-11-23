"use strict";

app.controller("ViewCtrl", function($rootScope, $scope, ContactService) {
	$scope.contacts = [];

// gets contacts that are already stored in firebase
	const getContacts = () => {
		ContactService.getAllTheContacts($rootScope.uid).then((results) => {
			$scope.contacts = results;
		}).catch((err) => {
			console.log("error in getContacts", err);
		});
	};
	getContacts();

// deletes contact by user id
	$scope.deleteContact = (userId) => {
		ContactService.deleteContact(userId).then((results) => {
			getContacts();
		}).catch((err) => {
			console.log("error in deleteContact", err);
		});
	};

// if contact is favorited, call updateContact from ContactService, submit form by user id and get contacts again
	$scope.switchFavorite = (contact, userId) => {
		contact.isFavorite = contact.isFavorite ? true: false;
		let userFave = ContactService.submitForm(contact);
		ContactService.updateContact(userFave, userId).then((result) => {
			getContacts();
		}).catch((err) => {
			console.log("error in updateContact", err);
		});
	};

});