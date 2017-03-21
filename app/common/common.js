(function(){
    
    angular.module("common",[]);
    
    angular.module("common").directive("firstDir", [firstDir]);
    
    function firstDir(){
        return {
          template:'<a class="navbar-brand" href="#">{{hc.brandName}}</a>'
        };
    }
    
    angular.module("common").directive("secondDir", [secondDir]);
    
    function secondDir(){
        return {
            templateUrl: 'app/header/header.tpl.html',
            restrict: "A"
        };
    }
    
})();