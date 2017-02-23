(function(){
    
    angular.module("bitblogger",["login", "header", "register"]);
    
    
    angular.module("bitblogger").config([function(){
        
        console.log("Config: Bitblogger");
    }]);
    
    
    angular.module("bitblogger").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        
        var vm = this;
        var headerTemplate = 'app/header/header.tpl.html';
        
        vm.appName = "BitBlogger";
        vm.showAppName = function () {
            vm.showing = true;
        };
        vm.hideAppName = function () {
            vm.showing = false;
        };
    }
    
})()