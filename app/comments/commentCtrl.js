(function(){
    
    angular.module("comment").controller("commentCtrl", [commentCtrl]);
    
    
    function commentCtrl(){
        
        var vm = this;
         vm.commenting = [
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
             },
             {
                 "id": "4",
                 "commentid": "104",
                 "commentname": "Never seen something so wonderful !"
             },
             {
                 "id": "5",
                 "commentid": "105",
                 "commentname": "Classic stuff !"
             },
             {
                 "id": "6",
                 "commentid": "106",
                 "commentname": "What a nice thought!"
             },
             {
                 "id": "7",
                 "commentid": "107",
                 "commentname": " Great !"
             },
             {
                 "id": "8",
                 "commentid": "108",
                 "commentname": "God bless you !"
             },
             {
                 "id": "9",
                 "commentid": "109",
                 "commentname": "You are the best !"
             }
             
         ];
    }
    
})();