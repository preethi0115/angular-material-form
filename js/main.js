
var app = angular.module('mainApp', ['ngMaterial']);

app.controller('MainCtrl', function($scope) {
  $scope.lob = [{
    "id": "Medicaid",
    "title": "Medicaid"
  }, {
    "id": "option2",
    "title": "option2"
  }, {
    "id": "option3",
    "title": "option3"
  }];

  $scope.priority = [{
    "id": "high",
    "title": "High"
  }, {
    "id": "medium",
    "title": "Medium"
  }, {
    "id": "option3",
    "title": "option3"
  }];
 
   $scope.categoryType = [{
    "id": "clinical",
    "title": "Clinical"
  }, {
    "id": "option2",
    "title": "option2"
  }, {
    "id": "option3",
    "title": "option3"
  }];
    $scope.category = [{
    "id": "diabetes",
    "title": "Diabetes"
  }, {
    "id": "option2",
    "title": "option2"
  }, {
    "id": "option3",
    "title": "option3"
  }];
  $scope.workflow = [{
    "id": "pip",
    "title": "My Cool PIP Workflow 2016"
  }, {
    "id": "option2",
    "title": "option2"
  }, {
    "id": "option3",
    "title": "option3"
  }];
  //init
  $scope.lobType = 'Medicaid';
  $scope.priorityType ='High';
  $scope.catType = 'Clinical';
  $scope.categryType ='Diabetes';
  $scope.workflowType ='My Cool PIP Workflow 2016';

});