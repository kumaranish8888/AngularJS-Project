(function (){
    
    angular.module("comment").service("commentSvc", [commentSvc]);
    
    function commentSvc(){
        
        this.getComments = function(){
        
       return [{
                "blogId": "1",
                "commentId": "cm1",
                "commentText": "Your Blog is awesome"
            },
            {
                "blogId": "1",
                "commentId": "cm2",
                "commentText": "Hey Kiran you made it clear.... Thanks"
            }
       ];
        }
        
    };
    
})();