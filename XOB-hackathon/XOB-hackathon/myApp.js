var app = angular.module('xob', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.filter('postId1Only', function () {
    return function (input) {
        var postOut = [];
        angular.forEach(input, function (postType) {
            if (postType._PostTypeId == '1') {
                postOut.push(postType);
            }
        });
        return postOut;
    };
});
app.controller('posts', function ($scope,$filter) {
    $scope.postData = jsonObj;
    $scope.postData.posts.row = $filter('postId1Only')($scope.postData.posts.row);
    $scope.totalPostCount = $scope.postData.posts.row.length;
    $scope.currentPostPage = 1;

    $scope.setvoteup = function (post) {
        localStorage.setItem(post.votes, post.votes + 1);
    };
    //$scope.pageChanged = function () {
    //    $scope.currentPostPage = $scope.currentPostPage+1;
    //};
 
});