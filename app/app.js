(function(){
    
    angular.module("bitblogger",["login", "header", "register"]);
    
    
    angular.module("bitblogger").config([function(){
        
        console.log("Config: Bitblogger");
    }]);
    
    
    angular.module("bitblogger").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        
        var vm = this;
    }
    
})()