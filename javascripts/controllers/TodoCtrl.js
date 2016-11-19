"use strict";

app.controller("TodoCtrl", function($scope, ItemFactory) {
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newTask = {};
  $scope.items = [];

  let getItems = function() {
    ItemFactory.getItemList().then(function(fbItems) {
      $scope.items = fbItems;
    })
  }

  getItems();

  $scope.allItems = function() {
    $scope.showListView = true;
  }
  $scope.newItem = function() {
    $scope.showListView = false;
  }

  $scope.addNewItem = function() {
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    ItemFactory.postNewItem($scope.newTask).then(function(itemID) {
      getItems();
      $scope.newTask = {};
      $scope.showListView = true;
    })
  }

  $scope.deleteItem = function(itemID) {
    ItemFactory.deleteItem(itemID).then(function(response) {
      getItems();
    })
  }
})
