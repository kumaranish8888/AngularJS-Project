(function(){
    
    angular.module("product").service("productSvc", ["$http", productSvc]);
    
    function productSvc($http){
        var pm = this;
        
        pm.getProducts = function(){
            
            return $http.get("api/products.json");
        }
        
        
    }
    
})();