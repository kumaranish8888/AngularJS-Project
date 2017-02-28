(function () {

    function registerCtrl(registerSvc) {
        var vm = this;
       // vm.countries = registerSvc.getCountries();
        //make a call to the register service
        //fetch the data from the json
       registerSvc.getCountriesFromJson()
       .then(function(response){
           console.log(response);
           vm.countries = response.data.countries;
       })
       
       .catch(function(response){
           
       })
       
       .finally(function(){
           
       });
        

            

    }

    angular.module("register")
        .controller("registerCtrl", ["registerSvc", registerCtrl]);

})();