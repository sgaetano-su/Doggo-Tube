let app = angular.module('doggoTube', []);

app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'https://www.youtube.com/**',
        'https://youtube.com/**'
    ]);
});

const key = 'AIzaSyDQ9gKgEow8QdNmQ_0WPlaVbydjpQzMxEI';