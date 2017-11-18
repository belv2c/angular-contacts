"use strict";

app.service("ContactService", function($http, $q, FIREBASE_CONFIG) {
	
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

const addNewContact = (newContact) => {
	return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
};


return {addNewContact, getAllTheContacts};
});

