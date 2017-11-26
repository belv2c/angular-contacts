"use strict";

app.controller("ViewCtrl", function($location, $rootScope, $scope, ContactService) {
	$scope.contacts = [];

	const getContacts = () => {
		ContactService.getAllTheContacts($rootScope.uid).then((results) => {
			$scope.contacts = results;
		}).catch((err) => {
			console.log("error in getContacts", err);
		});
	};
	getContacts();
	
	$scope.deleteContact = (userId) => {
		ContactService.deleteContact(userId).then((results) => {
			getContacts();
		}).catch((err) => {
			console.log("error in deleteContact", err);
		});
	};

$scope.favoriteContacts = (contact) => {
	let updatedContact = {};

	if (!contact.favorite) {
		updatedContact = ContactService.createContactObject(contact);
	} else {
		updatedContact = ContactService.createContactObject(contact);
		updatedContact.favorite = false;
	}
	ContactService.updateContact(updatedContact, contact.id).then(() => {
		getContacts();
	}).catch((err) => {
		console.log("error in favoriteContacts", err);
	});
};

$scope.editContact = (userId) => {
	$location.path(`/contacts/edit/${userId}`);
};

$scope.contactDetail = (userId) => {
	$location.path(`/contacts/detail/${userId}`);
};

});