"use strict";

app.controller("DetailCtrl", function($routeParams, $scope, ContactService) {
	$scope.contacts = [];

	const getContacts = () => {
		ContactService.getOneContact($routeParams.id).then((results) => {
			$scope.contacts = results;
		}).catch((err) => {
			console.log("error in getContacts", err);
		});
	};
	getContacts();

	$scope.favoriteContacts = (contact) => {
	let updatedContact = {};

	if (!contact.favorite) {
		updatedContact = ContactService.createContactObject(contact);
	} else {
		updatedContact = ContactService.createContactObject(contact);
		updatedContact.favorite = false;
	}
	ContactService.updateContact(updatedContact, $routeParams.id).then(() => {
		getContacts();
	}).catch((err) => {
		console.log("error in favoriteContacts", err);
	});
};

});