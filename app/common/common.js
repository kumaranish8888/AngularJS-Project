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
    
    angular.module("common").directive("numbersOnly", [numbersOnly]);
    
    function numbersOnly(){
        
        return{
          restrict:"A",
            link: function(scope,element, attrs){
                element.bind("keypress", function(e){
                    var selected = e.key;
                    var reg = new RegExp(/^[0-9]+$/);
                    var maxlength = attrs[maxlength];
                    if(!reg.test(selected) && this.value.length > maxlength){
                        e.preventDefault();
                    }
                });
            }
        };
        
    }
    
    angular.module("common").directive("customDatePicker", [customDatePicker]);
    
    function customDatePicker(){
        return {
          restrict: "A",
            link: function(scope,element, attrs){
                element.datepicker();
            }
        };
    }
    
})();