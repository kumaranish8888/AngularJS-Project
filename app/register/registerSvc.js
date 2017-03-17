(function(){
    
    angular.module("register").service("registerSvc", ["$http", registerSvc]);
    
    
    function registerSvc($http){
        
        var rm = this;
        rm.getCountries = function(){
            
            return $http.get("api/countries.json");
        }
        
    }
    
})();