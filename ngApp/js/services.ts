namespace app.Services {
  export class UserService {
    public RegisterResource;
    public register(user) {
      return this.RegisterResource.save(user).$promise;
      


    }
    constructor(
        $resource:ng.resource.IResourceService
    ) {
      this.RegisterResource = $resource('api/users/register');
    }
  }


  // services
  angular.module('app').service('userService', UserService);

}
