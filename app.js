let app = angular.module('doggoTube', []);

app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'https://www.youtube.com/**',
        'https://youtube.com/**'
    ]);
});

const key = 'AIzaSyDxmtiD7-a4qjC370LGytXEWJ8U2qJN2OY';


app.controller('searchCtrl', function($scope, $http) {
    $scope.query = "";
    $scope.searchvideos = [];

    $scope.search_videos = function() {
        $http({
            url:'https://www.googleapis.com/youtube/v3/search',
            method:'GET',
            params: {
                key: key,
                part:'snippet',
                maxResults:8,
                q: $scope.query + ' dog', 
                type:'video'
            }
        }).then(function(response) {
            console.log(response.data.items);
            $scope.videos = response.data.items;
            $scope.query = null;
        }, function(error){
            console.log(error);
        });

    }
});




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
            type:'video',
            videoID:'',
        }
    }).then(function(response) {
        console.log(response.data.items);

        $scope.videos = response.data.items;
    }, function(error){
        console.log(error);
    });
}); 




app.controller('playlistsCtrl', function($scope, $http) {
    $scope.playlists = []; 

    $http({
        url:'https://www.googleapis.com/youtube/v3/search',
        method:'GET',
        params: {
            key: key,
            part:'snippet',
            maxResults:8,
            q:'corgi', 
            type:'playlist'
        }
    }).then(function(response) {
        console.log(response.data.items);

        $scope.playlists = response.data.items;
    }, function(error){
        console.log(error);
    });
}); 




app.controller('channelsCtrl', function($scope, $http) {
    $scope.channels = []; 

    $http({
        url:'https://www.googleapis.com/youtube/v3/search',
        method:'GET',
        params: {
            key: key,
            part:'snippet',
            maxResults:8,
            q:'husky', 
            type:'channel'

        }
    }).then(function(response) {
        console.log(response.data.items);

        $scope.channels = response.data.items;
    }, function(error){
        console.log(error);
    });
}); 
