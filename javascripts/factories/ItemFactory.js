"use strict";

app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG) {
  var getItemList = function(userId) {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json?orderBy="uid"&equalTo="${userId}"`)
        .success(function(response) {
          let items = [];
          Object.keys(response).forEach(function(key){
            response[key].id = key;
            items.push(response[key]);
          });
          resolve(items);
        })
        .error(function(errorResponse) {
          reject(errorResponse);
        })
    })
  }

  var postNewItem = function(newItem) {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`,
        JSON.stringify({
          assignedTo: newItem.assignedTo,
          isCompleted: newItem.isCompleted,
          task: newItem.task,
          uid: newItem.uid
        })
      )
        .success(function(postResponse) {
          resolve(postResponse);
        })
        .error(function(postError) {
          reject(postError);
        })
    })
  }

  var deleteItem = function(itemID) {
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/items/${itemID}.json`)
        .success(function (deleteResponse) {
          resolve(deleteResponse);
        })
        .error(function(deleteError) {
          rejectd(deleteError);
        })
    })
  }

  var getSingleItem = function(itemID) {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items/${itemID}.json`)
        .success(function (getSingleItemResponse) {
          resolve(getSingleItemResponse);
        })
        .error(function(getSingleItemError) {
          rejectd(getSingleItemError);
        })
    })
  }

  var editItem = function(editItem) {
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/items/${editItem.id}.json`,
        JSON.stringify({
          assignedTo: editItem.assignedTo,
          isCompleted: editItem.isCompleted,
          task: editItem.task,
          uid: editItem.uid
        })
      )
        .success(function(editResponse) {
          resolve(editResponse);
        })
        .error(function(editError) {
          reject(editError);
        })
    })
  }


  return {getItemList:getItemList, postNewItem:postNewItem, deleteItem:deleteItem, getSingleItem:getSingleItem, editItem:editItem}
})
