(function(){
    
    angular.module("product").controller("productCtrl", ["productSvc", "$scope", "$rootScope", productCtrl]);
    
    function productCtrl(productSvc, $scope, $rootScope){
        
        var pc = this;
        
        productSvc.getProducts().then(function(response){
            
            $scope.myProducts = response;
            
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
        pc.addItem = function(data){
            $rootScope.$broadcast("ADD-ITEM");
        }
        
    }
    
})();