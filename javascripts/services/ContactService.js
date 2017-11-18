"use strict";

app.service("ContactService", function($http, $q, FIREBASE_CONFIG) {
	const getAllTheContacts = (userUid) => {
		let contactArray = [];
		return $q ((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
				let fbContacts = results.data;
				Object.keys(fbContacts).forEach((key) => {
					fbContacts[key].id = key;
					contactArray.push(fbContacts[key]);
					resolve(contactArray);
				});
			}).catch((err) => {
				console.log("error in getAllTheContacts", err);
			});
		});
	};
});