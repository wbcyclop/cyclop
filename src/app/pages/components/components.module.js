/**
 * @author k.danovsky
 * created on 15.01.2016
 */

 /** @ngInject */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components', [
    //'BlurAdmin.pages.components.mail',
    //'BlurAdmin.pages.components.timeline',
    //'BlurAdmin.pages.components.tree',
  ])
      .config(routeConfig);

  
  /*function routeConfig($stateProvider) {
    $stateProvider
        .state('components', {
          url: '/components',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Components',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        });
  }*/

})();
