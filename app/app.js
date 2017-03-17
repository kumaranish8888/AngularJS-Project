(function(){
    
    angular.module("project", ["header", "register", "posts", "ui.router", "contact"]);
    
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
        
        $stateProvider.state("register", registerObj);
        $stateProvider.state("posts", postsObj);
        $stateProvider.state("contact", contactObj);
        
        
    }]);
    
    function mainCtrl(){
        var vm = this;
        
        vm.headerTemplate = "app/header/header.tpl.html";
        vm.registerTemplate = "app/register/register.tpl.html";
        vm.postsTemplate = "app/posts/posts.tpl.html";
    }
    
})();