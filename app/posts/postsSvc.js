(function(){
    
    angular.module("posts").service("postsSvc", ["$http", "$q", postsSvc]);
    
    function postsSvc($http, $q){
        
        var pm = this;
        
        var anish = $q.defer();
        
        pm.getPosts = function(){
            
             $http.get("api/posts.json").then(function(response){
                 
                 anish.resolve(response.data.posts);
             }).catch(function(response){
                 
                 
             });
            
            return anish.promise;
            
        }
        
    }
    
})();