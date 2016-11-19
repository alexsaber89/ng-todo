"use strict";

app.controller("ItemNewCtrl", function($scope, $location, ItemFactory) {
  $scope.newTask = {};

  $scope.addNewItem = function() {
    $scope.newTask.isCompleted = false;
    ItemFactory.postNewItem($scope.newTask).then(function(itemID) {
      $location.url("/items/list");
      $scope.newTask = {};
    })
  }
})
