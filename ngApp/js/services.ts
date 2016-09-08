namespace app.Services {
  export class UserService {

    public register(user) {
      console.log (user)

    }
    constructor() {

    }
  }


  // services
  angular.module('app').service('userService', UserService);

}
