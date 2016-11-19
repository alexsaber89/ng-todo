"use strict";

app.controller("ItemEditCtrl", function($scope, $routeParams, $location, ItemFactory) {
  $scope.newTask = {};
  let itemID = $routeParams.id;
  ItemFactory.getSingleItem(itemID).then(function(singleItem) {
    singleItem.id = itemID;
    $scope.newTask = singleItem;
  });
  $scope.addNewItem = function() {
    ItemFactory.editItem($scope.newTask).then(function(response) {
      $scope.newTask = {};
      $location.url("/items/list");
    })
  }
})
