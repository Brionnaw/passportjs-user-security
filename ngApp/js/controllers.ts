namespace app.Controllers {
  export class HomeController {

    constructor() {

    }
}
  // Login controller
  export class LoginController {
      public user;


      public login(){
      this.userService.login(this.user). then((res) =>{
        if(res.message === "Correct"){
          this.$state.go('Home');
        } else {
          alert(res.message);
        }
      });
    }
    constructor(
      private  userService: app.Services.UserService,
      public $state: ng.ui.IStateService
    ) {

    }
  }
    // register controller
    export class RegisterController {
        public user;

        public register() {
        this.userService.register(this.user).then(() => {
            this.$state.go('Home');
        })
        }

      constructor(
      private  userService: app.Services.UserService,
      public $state: ng.ui.IStateService
      ) {
      }
      }
    // Controllers
  angular.module('app').controller('HomeController', HomeController),
  angular.module('app').controller('RegisterController', RegisterController),
  angular.module('app').controller('LoginController', LoginController)

}
