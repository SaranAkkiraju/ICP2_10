angular.module('homepage',[])
    .controller('homectrl', function($scope, $http) {
        $scope.getSearchResult = function() {
            $http.get('http://127.0.0.1:8083/servergoogle?searchtext='+$scope.searchitem).success(function (data) {
                try {
                    console.log(data);
                    $scope.searchDescription = data.itemListElement[0].result.detailedDescription.articleBody;
                    $scope.description = "Description:";
                    $scope.wiki = data.itemListElement[0].result.detailedDescription.url;
                    $scope.wikiheading = "Explore " + $scope.searchitem + " wiki in the following link";
                    $scope.searchimage = data.itemListElement[0].result.image.contentUrl;
                    document.getElementById("errormsg").innerHTML ="";
                }
                catch (err) {
                    // document.getElementById("errormsg").innerHTML = "Please Correct your search item";
                }
            })
        }
    })
function hideFunction() {
    var x = document.getElementById("resDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}
