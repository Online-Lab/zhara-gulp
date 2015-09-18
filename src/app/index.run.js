(function() {
  'use strict';

  angular
    .module('zharaGulp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
