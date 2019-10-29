function UserService($http) {

	this.user = ''

	this.getUser = function(){
		return $http.get('http://0.0.0.0:8882/rest/user')
	}

	this.updateUser = function(){
		return $http.post('http://0.0.0.0:8882/rest/user', {name: 'Derp'})
	}
}

angular
	.module('app')
	.service('UserService', UserService);
