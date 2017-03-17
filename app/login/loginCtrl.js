(function(){
    
    angular.module("login").controller("loginCtrl", ["$state", loginCtrl]);
    
    function loginCtrl($state){
        
        var lm = this;
        
        lm.btnSubmit = function(){
            
            $state.go("message");
            
        }
        
        lm.visaTypes = [
            {
                "type": "F1"
            },
            {
                "type": "J1"
            },
            {
                "type": "H1"
            },
            {
                "type": "Not Applicable"
            }
        ];
        
    }
    
})();