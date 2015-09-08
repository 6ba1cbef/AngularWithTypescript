require('./app');
require('expose?app.domain.Product!exports?app.domain.Product!./products/product');
require('./common/services/common.services');
require('expose?app.common.DataAccessService!exports?app.common.DataAccessService!./common/services/dataAccessService');
require('imports?app=app!./common/services/productResourceMock');

//(function() {
//setTimeout(function(){
require('./products/productListCtrl');
require('./products/productDetailCtrl');

    angular.element(document).ready(function() {
        setTimeout(function() {
        console.log('resuming bootstrap');
        angular.resumeBootstrap();
        }, 500);
    });
//}, 5000);
//}());
