(function() {

    angular.module('app')
        .controller('BooksController', ['$q', 'constants', 'dataService', 'badgeService', BooksController])

    function BooksController($q, constants, dataService, badgeService) {

        var controller = this;

        controller.appName = constants.APP_TITLE;

        controller.getBadge = badgeService.retrieveBadge;

        var booksPromise = dataService.getAllBooks();
        var readersPromise = dataService.getAllReaders();

        $q.all([booksPromise, readersPromise])
            .then(getAllDataSuccess)
            .catch(errorCallback)
            .finally(getAllDataComplete);
        function getAllDataSuccess(dataArray) {
            controller.allBooks = dataArray[0];
            controller.allReaders = dataArray[1];
        }
        function getAllDataComplete(notification) {
            console.log('getAllDataComplete has completed');
        }

        // // get all books
        // controller.allBooks = dataService.getAllBooks()
        //     .then(getBooksSuccess, null, getBooksNotification)
        //     .catch(errorCallback)
        //     .finally(getAllBooksComplete);

        // function getBooksSuccess(books) {
        //     controller.allBooks = books;
        // }
        // function getBooksNotification(notification) {
        //     console.log(notification);
        // }
        // function getAllBooksComplete(notification) {
        //     console.log('getAllBooks has completed');
        // }

        // // get all readers
        // controller.allReaders = dataService.getAllReaders()
        //     .then(getReadersSuccess)
        //     .catch(errorCallback)
        //     .finally(getAllReadersComplete);

        // function getReadersSuccess(readers) {
        //     controller.allReaders = readers;
        // }
        // function getAllBooksComplete(notification) {
        //     console.log('getAllReaders has completed');
        // }

        // standard callback
        function errorCallback(errorMsg) {
            console.log('Error Message: ' + errorMsg);
        }
    }
}());