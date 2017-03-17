(function(){
    
    angular.module("posts").controller("postsCtrl", ["postsSvc", postsCtrl]);
    
    function postsCtrl(postsSvc){
        
        var pm = this;
        
        postsSvc.getPosts().then(function(response){
            
            pm.myPosts = response.data.posts;
            
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
    }
    
})();