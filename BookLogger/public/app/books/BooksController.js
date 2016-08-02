(function() {

    angular.module('app')
        .controller('BooksController', BooksController)

    function BooksController(dataService, logger, constants) {

        var controller = this;

        controller.appName = constants.APP_TITLE;
        controller.allBooks = dataService.getAllBooks();

        logger.output('BookController has been created');
    }

}());