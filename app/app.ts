module app {
  var main = angular.module("productManagement", 
                              ["ngRoute", 
                                "common.services", 
                                "productResourceMock"]);
 
  var main = angular.module('productManagement');
  main.config(routeConfig);
  
  routeConfig.$inject = ["$routeProvider"];
  function routeConfig($routeProvider: ng.route.IRouteProvider): void {
    
    $routeProvider
      .when("/productList", 
        {
          templateUrl: "/app/products/productListView.html",
          template: require('./products/productListView.html'),
          controller: "ProductListCtrl as vm"
        })
      .when("/productDetail/:productId",
        {
          templateUrl: "/app/products/productDetailView.html",
          template: require('./products/productDetailView.html'),
          controller: "ProductDetailCtrl as vm"
        })
      .otherwise("/productList");
  }
}
