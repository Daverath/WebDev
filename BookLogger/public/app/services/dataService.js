(function() {

    var app = angular.module('app')
        .factory('dataService', dataService);

    function dataService() {

        return {
            getAllBooks: getAllBooks,
            getAllReaders: getAllReaders
        };

        function getAllBooks() {
            return [
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
        }

        function getAllReaders() {
            return [
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
        }
    }


}());