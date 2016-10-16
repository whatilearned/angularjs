angular.module('myApp', [])
.filter('findbad',findbadFilter)
.controller('HomeCtrl', homeCtrl);

homeCtrl.$inject =['$scope','$filter','findbadFilter'];
function homeCtrl($scope, $filter){
    $scope.name="Ramesh Raju Alluri";
        $scope.messageG="This is very bad Meesage";
    $scope.fltName= $filter('uppercase')($scope.name);
    $scope.clickMessage="Ramesh";
 $scope.$watch(function () {
    console.log("Digest Loop Fired!");
  })
    
$scope.getClick =function(){
    $scope.clickMessage="New Message "+ $scope.$$watchersCount;
};
}
function findbadFilter(){
    return function(word,blockword){
        word ||"";
        if(word.search(blockword)<0){
            return word;
        }else{
            return "Found Bad Word"
        }
    }
}


