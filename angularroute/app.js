
   //Define an angular module for our app
var sampleApp = angular.module('sampleApp', ['ngRoute']);
 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
        templateUrl: 'add_order1.html',
        controller: 'AddOrderController',
		foodata: 'addorder'
    }).
      when('/ShowOrders', {
        templateUrl: 'show_orders.html',
        controller: 'ShowOrdersController'
      }).
	   when('/ShowOrder/:orderId', {
        templateUrl: 'show_order.html',
        controller: 'ShowOrderController'
      }).
      otherwise({
        redirectTo: '/AddNewOrder'
      });
}]);
 
 
sampleApp.controller('AddOrderController', function($scope,$route) {
     
    $scope.message = 'This is Add new order screen';
	 var foo = $route.current.foodata;    
    alert(foo);
     
});
sampleApp.controller('ShowOrdersController', function($scope, $routeParams) {
 $scope.message = 'This is Show orders screen';
 
});
 
 
sampleApp.controller('ShowOrderController', function($scope,$routeParams) {
 
    $scope.message = 'This is Show orders screen';
    $scope.order_id = $routeParams.orderId;
 
});