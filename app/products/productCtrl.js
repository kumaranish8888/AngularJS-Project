(function(){
    
    angular.module("product").controller("productCtrl", ["productSvc", productCtrl]);
    
    function productCtrl(productSvc){
        
        var pc = this;
        
        productSvc.getProducts().then(function(response){
            pc.myProducts = response.data.products;
            
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
    }
    
})();