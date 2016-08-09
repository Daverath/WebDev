(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/templates/books.html',
                controller: 'BooksController',
                controllerAs: 'books'
            })
            .when('/AddBook', {
                templateUrl: '/app/templates/addBook.html',
                controller: 'AddBookController',
                controllerAs: 'addBook'
            })
            // .when('/EditBook/:bookID', {
            //     templateUrl: '/app/templates/editBook.html',
            //     controller: 'EditBookController',
            //     controllerAs: 'editBook'
            // })
            .otherwise('/');
    }]);
}());