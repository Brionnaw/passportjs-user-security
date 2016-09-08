namespace app.Services {
  export class UserService {
    public RegisterResource;
    public LoginResource;
    public register(user) {
      return this.RegisterResource.save(user).$promise;

    }
    public login(user){
      console.log(user);
      return this.LoginResource.save(user).$promise;

    }
    constructor(

        $resource:ng.resource.IResourceService
    ) {
      this.RegisterResource = $resource('api/users/register');
      this.LoginResource = $resource('api/users/login');

    }
  }


  // services
  angular.module('app').service('userService', UserService);

}
