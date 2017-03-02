(function(){
    
    angular.module("register").service("registerSvc", ["$http", registerSvc]);
    
    function registerSvc($http){
        
        this.getCountries = function(){
            return [
                {"name": "India", "code": "IN"},
                {"name": "United States", "code": "USA"}
            ];
        };
        
        this.getCountriesFromJson = function(){
            
            return $http.get("api/country.json");
        
        }; 
        
    };
    
})();