(function(){
    
   angular.module("bitblogger",["login", "header", "register", "comment"]);
    
    
    angular.module("bitblogger").config([function(){
        
        console.log("Config: Bitblogger");
    }]);
    
    
    angular.module("bitblogger").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        
        var vm = this;
        vm.headerTemplate = 'app/header/header.tpl.html';
        vm.commentTemplate = 'app/comments/comment.tpl.html';
        vm.registerTemplate = "app/register/register.tpl.html";
        
       
    } 
    
    
    
})()