function UserService($http) {
	this.getUser = () => {
		return $http.get('http://0.0.0.0:8882/rest/user');
	}
	this.updateUser = (user) => {
		return $http.post('http://0.0.0.0:8882/rest/user', { user })
	}
}

angular
	.module('app')
	.service('UserService', UserService);