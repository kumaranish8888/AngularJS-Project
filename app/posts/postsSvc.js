(function(){
    
    angular.module("posts").service("postsSvc", ["$http", postsSvc]);
    
    function postsSvc($http){
        
        return $http.get("api/posts.json");
        
    }
    
})();