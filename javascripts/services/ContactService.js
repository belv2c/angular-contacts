"use strict";

app.service("ContactService", function($http, $rootScope, $q, FIREBASE_CONFIG) {
	
	const createContactObject = (contact) => {
		 return {
			"firstName": contact.firstName,
			"lastName": contact.lastName,
			"address": contact.address,
			"phoneNumber": contact.phoneNumber,
			"email": contact.email,
			"birthday": contact.birthday,
			"nickName": contact.nickName,
			"user_id": $rootScope.uid,
			"favorite": true
		};
	};

	const getAllTheContacts = (userUid) => {
		let contactsArray = [];
		return $q ((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="user_id"&equalTo="${userUid}"`).then((results) => {
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

	const getFavorites = (userUid) => {
		let contactsArray = [];
		return $q ((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="user_id"&equalTo="${userUid}"`).then((results) => {
				let contacts = results.data;
				Object.keys(contacts).forEach((key) => {
					contacts[key].id = key;
					if (contacts[key].favorite)
						contactsArray.push(contacts[key]);
					});

					resolve(contactsArray);
				

			}).catch((err) => {
				console.log("error in getAllTheContacts", err);
			});
		});
	};

const addNewContact = (newContact) => {
	return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
};

const deleteContact = (contactId) => {
		return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
	};

const updateContact = (contact, contactId) => {
		return $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`, JSON.stringify(contact));
	};

const getOneContact = (contactId) => {
	return $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
};


return {addNewContact, createContactObject, getAllTheContacts, deleteContact, updateContact, getOneContact, getFavorites};
});

