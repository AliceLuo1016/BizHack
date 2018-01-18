var app = angular.module("driverApp", ["ngRoute", "ngMap"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/map.html",
        controller: "mapController"
    })
    .when("/accept", {
        templateUrl: "partials/acceptRequest.html",
        controller: "acceptController"
    });
});

app.controller("mapController", function($scope, $location, $http) {
var queryParams = {
  "visits": {
    "order_1": {
      "location": {
        "name": "6800 Cambie",
        "lat": 49.227107,
        "lng": -123.1163085
      }
    },
    "order_2": {
      "location": {
        "name": "3780 Arbutus",
        "lat": 49.2474624,
        "lng": -123.1532338
      }
    },
    "order_3": {
      "location": {
        "name": "800 Robson",
        "lat": 49.2819229,
        "lng": -123.1211844
      }
    }
  },
  "fleet": {
    "vehicle_1": {
      "start_location": {
        "id": "depot",
        "name": "800 Kingsway",
        "lat": 49.2553636,
        "lng": -123.0873365
      }
    }
  }
};

// number of visits
var numberofvisits = Object.keys(queryParams.visits).length;
  // $scope.arraystring = [];

// for (var key in queryParams.visits) {
//   var latt = queryParams.visits[key].location.lat;
//   var lngg = queryParams.visits[key].location.lng;
//   var locationstring = "[" + latt + "," + lngg + "]";
//   // console.log(locationstring);
//   $scope.arraystring.push(locationstring);
// }
  // console.log($scope.arraystring);
  $scope.wayPoints = [
      {location: {lat:49.228081, lng: -123.068521}, stopover: true},
      {location: {lat:49.238715, lng: -123.102361}, stopover: true},
      {location: {lat:49.259893, lng: -123.146392}, stopover: true},
      {location: {lat:49.261798, lng: -123.232823}, stopover: true},
      {location: {lat:49.284870, lng: -123.132396}, stopover: true},
      {location: {lat:49.283799, lng: -123.123909}, stopover: true},
      {location: {lat:49.270530, lng: -123.134760}, stopover: true},
  ];

var creds = {
  headers:{ 'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGRmMDcxM2VkNzE0MWFlMGE3ZWI5OWQiLCJpYXQiOjE0OTEwNTQ3NTJ9.rL0viwCPcei2rcj7xf8W5hDyQYxsBuc5cxfeyUdFDL8'}
}

$http.post("https://api.routific.com/v1/vrp", queryParams, creds)
        .then(function (data) {
          // console.log(data);
          // console.log(data.data.solution.vehicle_1[0]);
          // console.log(data.data.solution.vehicle_1[4]); // undefined   
          // var number = data.data.solution.vehicle_1.length;      
          // for (int i = 0; i < number; i++) {
          //   var location = data.data.solution.vehicle_1[i];
          //   // console.log(location);
          // }

        }, function (error) {
          console.log(error.toString());
        });


});

app.controller("acceptController", function($scope, $location) {
  $scope.customerID = "#111111";
  $scope.customerName = "Jane Doe";
  $scope.customerAddress = "2222 Broadway St.";
  $scope.customerPhone = "604-111-1111";
  $scope.travelDistance = "3km";
  $scope.timeFrame = "Within 3 hours";
});
