(function(){
    
    angular.module("posts").controller("postsCtrl", ["postsSvc", "$scope", postsCtrl]);
    
    function postsCtrl(postsSvc, $scope){
        
        var pm = this;
        
        postsSvc.getPosts().then(function(response){
            
            $scope.myPosts = response;
            
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
    }
    
})();