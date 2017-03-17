(function(){
    
    angular.module("posts").service("postsSvc", ["$http", postsSvc]);
    
    function postsSvc($http){
        
        var pm = this;
        
        pm.getPosts = function(){
            
            return $http.get("api/posts.json");
            
        }
        
    }
    
})();