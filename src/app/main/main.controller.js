(function() {
  'use strict';

  angular
    .module('zharaGulp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Mailer) {
    $scope.newOrderData = {
      name: "",
      phone: "",
      email: ""
    };

    //Order consultation
    $scope.order = function(){
      var msg = "Была добавлена новая заявка. Телефон клиента: " + $scope.newOrderData.phone;
      var msg = "Была добавлена новая заявка. Информация о клиенте: <br><br>" + 
        ($scope.newOrderData.name ? "Имя: " + $scope.newOrderData.name + "<br>" : '') + 
        ($scope.newOrderData.email ? "E-mail: " + $scope.newOrderData.email + "<br>" : '') + 
        ($scope.newOrderData.phone ? "Тел.: " + $scope.newOrderData.phone + "<br>" : '');

      Mailer.sendEmail(msg).success(function(){
        alert("Email was sent");
      });
    }

  }
})();
