var app = angular.module("customerApp", ["ngRoute", "ngMap"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/customerInfo.html",
        controller: "infoController"
    })
    .when("/availability", {
        templateUrl: "partials/driverAvailability.html",
        controller: "availabilityController"
    })
    .when("/confirm", {
        templateUrl: "partials/confirmRequest.html",
        controller: "confirmController"
    });
});

var customerInfo = {
  "name": "",
  "email": "",
  "phone": "",
  "address": "",
  "timeframe": ""
};

app.controller("infoController", function($scope, $location) {
  
  $scope.saveCustomerInfo = function (customer) {
    customerInfo.name = customer.firstname + " " + customer.lastname;
    customerInfo.email = customer.email;
    customerInfo.phone = customer.phone;
    customerInfo.address = customer.address + ", " + customer.city + ", " + customer.postal;
    customerInfo.timeframe = customer.timeframe;
    $location.path("/availability");
  };
});

app.controller("availabilityController", function($scope, $location) {
  $scope.saveCustomerInfo = function (customer) {
  console.log("Name is: " + customerInfo.name);
  $location.path("/confirm");
};
});

app.controller("confirmController", function($scope, $location, $http) {
  $scope.customerID = "#111111";
  $scope.customerName = customerInfo.name;
  $scope.customerAddress = customerInfo.address;
  $scope.customerPhone = customerInfo.phone;
  $scope.timeFrame = customerInfo.timeframe;
  
  var queryParams = {
    "Name": "JC Ling",
    "Email": "jjj@gmail.com"
  };
});