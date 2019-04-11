let app = angular.module('doggoTube', []);

app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'https://www.youtube.com/**',
        'https://youtube.com/**'
    ]);
});

const key = 'AIzaSyDxmtiD7-a4qjC370LGytXEWJ8U2qJN2OY';


app.controller('searchCtrl', function($scope, $http) {
    $scope.search_query = '';

    $scope.search_videos = function() {
        $http({
            url:'https://www.googleapis.com/youtube/v3/search',
            method:'GET',
            params: {
                key: key,
                part:'snippet',
                maxResults:8,
                q: $scope.search_query + ' dog', 
                type:'video'
            }
        }).then(function(response) {
            console.log(response.data.items);
    
            $scope.videos = response.data.items;
        }, function(error){
            console.log(error);
        });

    }
});


// playlist in playlists
// scope.corgi
// scope.husky

app.controller('videoCtrl', function($scope, $http) {
    $scope.videos = []; 

    $http({
        url:'https://www.googleapis.com/youtube/v3/search',
        method:'GET',
        params: {
            key: key,
            part:'snippet',
            maxResults:8,
            q:'dachshund', 
            type:'video'
        }
    }).then(function(response) {
        console.log(response.data.items);

        $scope.videos = response.data.items;
    }, function(error){
        console.log(error);
    });
}); 