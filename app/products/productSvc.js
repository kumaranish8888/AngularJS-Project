(function(){
    
    angular.module("product").service("productSvc", ["$http", "$q", productSvc]);
    
    function productSvc($http, $q){
        var pm = this;
        
        pm.getProducts = function(){
            
            //return $http.get("api/products.json");
            
            var dfd = $q.defer();
            
            $http.get("api/products.json")
                
            .then(function(response){
                
                dfd.resolve(response.data.products);
                
            })
            .catch(function(response){
                
                dfd.reject({message:"Error"});
                
            });
            
            return dfd.promise;
        }
        
        
    }
    
})();