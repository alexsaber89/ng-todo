"use strict";

app.controller("ItemListCtrl", function($scope, $rootScope, ItemFactory) {
  $scope.items = [];

  let getItems = function() {
    ItemFactory.getItemList($rootScope.user.uid).then(function(fbItems) {
      $scope.items = fbItems;
    })
  }

  getItems();

  $scope.deleteItem = function(itemID) {
    ItemFactory.deleteItem(itemID).then(function(response) {
      getItems();
    })
  }

  $scope.inputChange = function(thingy) {
    ItemFactory.editItem(thingy).then(function(response) {
    })
  }
})
