(function() {

    var app = angular.module('app', []);

    app.provider('books', ['constants', function (constants) {

        var includeVersionInTitle = false;
        this.setIncludeVersionInTitle = function (value) {
            includeVersionInTitle = value;
        };

        this.$get = function () {

            var appName = constants.APP_TITLE;
            var version = constants.APP_VERSION;

            if (includeVersionInTitle) {
                appName += ' ' + version;
            }

            var appDesc = constants.APP_DESCRIPTION;

            return {
                appName: appName,
                appDesc: appDesc
            }
        };
    }]);

    app.config(['booksProvider', 'constants', function (booksProvider, constants) {
        booksProvider.setIncludeVersionInTitle(true);

        console.log('title from constants service: ' + constants.APP_TITLE);
    }]);
}());