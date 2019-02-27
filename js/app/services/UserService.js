function UserService($http) {
	this.getUser = () => {
		return $http.get('http://0.0.0.0:8882/rest/user');
	}
	this.updateUser = (userInfo) => {
		return $http.post('http://0.0.0.0:8882/rest/user', userInfo)
	}
}

angular
	.module('app')
	.service('UserService', UserService);