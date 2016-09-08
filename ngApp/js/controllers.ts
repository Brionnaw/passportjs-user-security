namespace app.Controllers {
  export class HomeController {

    constructor() {

    }
}
  // Login controller
  export class LoginController {

    constructor() {

    }
  }
    // register controller
    export class RegisterController {
        public user;

        public register() {
        this.userService.register(this.user);
        }

      constructor(
      private  userService: app.Services.UserService
      ) {
}
      }
    // Controllers
  angular.module('app').controller('HomeController', HomeController),
  angular.module('app').controller('RegisterController', RegisterController),
  angular.module('app').controller('LoginController', LoginController)

}
