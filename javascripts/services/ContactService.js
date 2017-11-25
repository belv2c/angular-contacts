"use strict";

app.service("ContactService", function($http, $q, $rootScope, FIREBASE_CONFIG) {
	
	const getAllTheContacts = (userUid) => {
		let contactsArray = [];
		return $q ((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
				let contacts = results.data;
				Object.keys(contacts).forEach((key) => {
					contacts[key].id = key;
					contactsArray.push(contacts[key]);
					});
					resolve(contactsArray);
			}).catch((err) => {
				console.log("error in getAllTheContacts", err);
			});
		});
	};

	const getFavoriteContacts = (userUid) => {
		let contactsArray = [];
		return $q ((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
				let contacts = results.data;
				Object.keys(contacts).forEach((key) => {
					contacts[key].id = key;
					if(contacts[key].isFavorite) {
					contactsArray.push(contacts[key]);
						}
					});
					resolve(contactsArray);
			}).catch((err) => {
				console.log("error in getFavoriteContacts", err);
			});
		});
	};

const addNewContact = (newContact) => {
	return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
};

const deleteContact = (userId) => {
		return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${userId}.json`);
	};

const updateContact = (updatedContact, userId) => {
		return $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${userId}.json`, JSON.stringify(updatedContact));
	};

		const submitForm = (contact) => {
			return {
			"firstName": contact.firstName,
			"lastName": contact.lastName,
			"address": contact.address,
			"phoneNumber": contact.phoneNumber,
			"email": contact.email,
			"birthday": contact.birthday,
			"nickName": contact.nickName,
			"isFavorite": contact.isFavorite,
			"uid": $rootScope.uid
		};
	};	

return {addNewContact, getAllTheContacts, getFavoriteContacts, deleteContact, updateContact, submitForm};

});

