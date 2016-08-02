(function() {

    angular.module('app')
        .controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', BooksController])

    function BooksController(books, dataService, logger, badgeService) {

        var controller = this;

        controller.appName = books.appName;
        controller.allBooks = dataService.getAllBooks();
        controller.allReaders = dataService.getAllReaders();

        controller.getBadge = badgeService.retrieveBadge;

        logger.output('BookController has been created');
    }

}());