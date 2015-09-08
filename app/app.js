var app;
(function (app) {
    var main = angular.module("productManagement", ["ngRoute",
        "common.services",
        "productResourceMock"]);
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/productList", {
            templateUrl: "/app/products/productListView.html",
            template: require('./products/productListView.html'),
            controller: "ProductListCtrl as vm"
        })
            .when("/productDetail/:productId", {
            templateUrl: "/app/products/productDetailView.html",
            template: require('./products/productDetailView.html'),
            controller: "ProductDetailCtrl as vm"
        })
        .otherwise("/productList");
    }
})(app || (app = {}));
