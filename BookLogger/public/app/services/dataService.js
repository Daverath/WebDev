(function() {

    var app = angular.module('app')
        .factory('dataService', ['$q', '$timeout', dataService]);

    function dataService($q, $timeout) {

        return {
            getAllBooks: getAllBooks,
            getAllReaders: getAllReaders
        };

        function getAllBooks() {

            var booksArray = [
                {
                    book_id: 1,
                    title: "Anna Karenina",
                    author: "Leo Tolstoy",
                    year_published: "1878"
                },
                {
                    book_id: 2,
                    title: "The Things They Carried",
                    author: "Tim O'Brien",
                    year_published: "1990"
                },
                {
                    book_id: 3,
                    title: "Invisible Man",
                    author: "Ralph Ellison",
                    year_published: "1952"
                }
            ];

            var deferred = $q.defer();

            $timeout(function() {

                var success = true;
                if (success) {
                    deferred.notify('Just getting started gathering books...');
                    deferred.notify('Almost done gathering books...');

                    deferred.resolve(booksArray);
                } else {
                    deferred.reject('Error retrieving books.');
                }
            }, 1000);

            return deferred.promise;
        }

        function getAllReaders() {

            var readersArray = [
                {
                    reader_id: 1,
                    name: "Marie",
                    weeklyReadingGoal: 315,
                    totalMinutesRead: 5600
                },
                {
                    reader_id: 2,
                    name: "Daniel",
                    weeklyReadingGoal: 210,
                    totalMinutesRead: 3000
                },
                {
                    reader_id: 3,
                    name: "Lanier",
                    weeklyReadingGoal: 140,
                    totalMinutesRead: 600
                }
            ];

            var deferred = $q.defer();

            $timeout(function() {

                deferred.resolve(readersArray);

            }, 1500);

            return deferred.promise;
        }
    }

}());