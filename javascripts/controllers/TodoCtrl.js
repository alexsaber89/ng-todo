"use strict";

app.controller("TodoCtrl", function($scope) {
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newTask = {};
  $scope.items = [
    {
      id: 0,
      task: "mow the lawn",
      isCompleted: true,
      assignedTo: "Zoe"
    },
    {
      id: 1,
      task: "grade quizzes",
      isCompleted: false,
      assignedTo: "William"
    },
    {
      id: 2,
      task: "take a nap",
      isCompleted: false,
      assignedTo: "Zoe"
    }
  ];

  $scope.allItems = function() {
    console.log("allItems");
    $scope.showListView = true;
  }
  $scope.newItem = function() {
    console.log("newItem");
    $scope.showListView = false;
  }

  $scope.addNewItem = function() {
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    console.log("newTask in function", $scope.newTask);
    $scope.items.push($scope.newTask);
    $scope.newTask = {};
    $scope.showListView = true;
  }
})