(function(){
    "use strict";
    angular.module("EducationPortal")
        .controller("ProfileController",ProfileController);


    function ProfileController(UserService,$rootScope){

        var currentUser= $rootScope.currentUser;
        console.log("currentuser", currentUser);
        var vm=this;
        vm.message= null;
        console.log("first name ", currentUser.data.firstname);
        vm.firstname=currentUser.data.firstname;
        vm.lastname=currentUser.data.lastname;
        vm.username=currentUser.data.username;
        vm.password=currentUser.data.password;
        vm.email=currentUser.data.email;
        vm.update=update;

        function init(){

        }
        init;

        function update(username,password,firstname,lastname,email){
            var newDetails= {"username" : username, "firstname": firstname,
                "lastname":lastname , "email" :email, "password" :password};

            UserService.updateUser(newDetails)
                .then(
                    function(response){
                        $rootScope.currentUser=response.data;
                        vm.message="Profile Update";
                    },
                    function(err){
                        vm.message="Couldn't update the profile";
                    });
        }
    }
})();
