/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts', [
    //sous menu du charts
      //'BlurAdmin.pages.charts.amCharts',
      //'BlurAdmin.pages.charts.chartJs',
      //'BlurAdmin.pages.charts.chartist',
      //'BlurAdmin.pages.charts.morris'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts', {
          url: '/charts',
          //abstract: true,
          //templateUrl: 'app/pages/charts/chartist/chartist.html',
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'Videos analyse',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 150,
          },
        });
  }

})();
