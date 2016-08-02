(function(){

    angular.module('app')
        .controller('EditBookController', ['$routeParams', EditBookController]);

    function EditBookController($routeParams) {
        var myParam = $routeParams.bookID;
        console.log(myParam);
    }

}());