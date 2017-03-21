(function(){
    
    angular.module("header").controller("headerCtrl", ["$rootScope", headerCtrl]);
    
    function headerCtrl($rootScope){
        
        console.log("Header controller");
        
        var hm = this;
        
        hm.brandName = "BitBlogger";
        
        hm.cartItems = 0;
        
        hm.navItems = [
            {
                "key":"posts",
                "value":"Posts"
            },
            {
                "key":"login",
                "value":"Login"
            },
            {
                "key":"register",
                "value":"Register"
            },
            {
                "key":"product",
                "value":"Products"
            }
        ];
        
        $rootScope.$on("ADD-ITEM", function(data){
            hm.cartItems++;
        })
    }
    
})();