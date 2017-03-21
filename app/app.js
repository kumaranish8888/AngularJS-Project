(function(){
    
    angular.module("project", ["header", "register", "posts", "ui.router", "contact", "login", "product", "message", "common"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    angular.module("project").config(["$stateProvider", function($stateProvider){
        
        var registerObj =  {
            templateUrl: "app/register/register.tpl.html",
            controller: "registerCtrl as rc"
        };
        
        var postsObj = {
            templateUrl:"app/posts/posts.tpl.html",
            controller: "postsCtrl as pc"
        };
        
        var contactObj = {
            templateUrl: "app/contact/contact.tpl.html"
        };
        
        var loginObj = {
            templateUrl: "app/login/login.tpl.html"  
        };
        
        var productObj = {
            templateUrl: "app/products/product.tpl.html"
        };
        
        var messageObj = {
            templateUrl: "app/message/message.tpl.html"  
        };
        
        $stateProvider.state("register", registerObj);
        $stateProvider.state("posts", postsObj);
        $stateProvider.state("contact", contactObj);
        $stateProvider.state("login", loginObj);
        $stateProvider.state("product", productObj);
        $stateProvider.state("message", messageObj);
        
        
    }]);
    
    function mainCtrl(){
        var vm = this;
        
        vm.headerTemplate = "app/header/header.tpl.html";
    }
    
})();