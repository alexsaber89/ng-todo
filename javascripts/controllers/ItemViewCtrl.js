"use strict";

app.controller("ItemViewCtrl", function($scope, $routeParams, ItemFactory) {
  $scope.selectedItem = {};
  let itemID = $routeParams.id;
  ItemFactory.getSingleItem(itemID).then(function(singleItem) {
    singleItem.id = itemID;
    $scope.selectedItem = singleItem;
  });
})
