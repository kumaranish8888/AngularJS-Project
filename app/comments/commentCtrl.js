(function(){
    
    angular.module("comment").controller("commentCtrl", ["commentSvc",commentCtrl]);
    
    
    function commentCtrl(commentSvc){
        
        var vm = this;
        vm.comments = commentSvc.getComments();
      /*   vm.commenting = [
             {
                 "id": "1",
                 "commentid": "101",
                 "commentname": "This is Great !"
             },
             {
                 "id": "2",
                 "commentid": "102",
                 "commentname": "What an Awesome page !"
             },
             {
                 "id": "3",
                 "commentid": "103",
                 "commentname": "Oh This is the best I can Get, Thank you so much !"
             }
             
         ]; */
    }
    
})();