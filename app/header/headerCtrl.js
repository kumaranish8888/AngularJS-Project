(function(){
    
    angular.module("header").controller("headerCtrl", [headerCtrl]);
    
    function headerCtrl(){
        
        console.log("Header controller");
        
        var hm = this;
        
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
        
    }
    
})();