"use strict";

app.controller("LoginCtrl", function($rootScope, $scope, AuthService) {
	$scope.authenticate = () => {
		AuthService.authenticateGoogle().then((result) => {
			$rootScope.uid = result.user.uid;
		});
	};
});