module = angular.module('app', []);

module.directive('showErrors', function ($timeout, showErrorsConfig) {
        var getShowSuccess, linkFn;
        getShowSuccess = function (options) {
            var showSuccess;
            showSuccess = showErrorsConfig.showSuccess;
            if (options && options.showSuccess != null) {
                showSuccess = options.showSuccess;
            }
            return showSuccess;
        };
        linkFn = function (scope, el, attrs, formCtrl) {
            var blurred, inputEl, inputName, inputNgEl, options, showSuccess, toggleClasses;
            blurred = false;
            options = scope.$eval(attrs.showErrors);
            showSuccess = getShowSuccess(options);
            inputEl = el[0].querySelector('[name]');
            inputNgEl = angular.element(inputEl);
            inputName = inputNgEl.attr('name');
            if (!inputName) {
                throw 'show-errors element has no child input elements with a \'name\' attribute';
            }
            inputNgEl.bind('blur', function () {
                blurred = true;
                return toggleClasses(formCtrl[inputName].$invalid);
            });
            scope.$watch(function () {
                return formCtrl[inputName] && formCtrl[inputName].$invalid;
            }, function (invalid) {
                if (!blurred) {
                    return;
                }
                return toggleClasses(invalid);
            });
            scope.$on('show-errors-check-validity', function () {
                return toggleClasses(formCtrl[inputName].$invalid);
            });
            scope.$on('show-errors-reset', function () {
                return $timeout(function () {
                    el.removeClass('has-error');
                    el.removeClass('has-success');
                    return blurred = false;
                }, 0, false);
            });
            return toggleClasses = function (invalid) {
                el.toggleClass('has-error', invalid);
                if (showSuccess) {
                    return el.toggleClass('has-success', !invalid);
                }
            };
        };
        return {
            restrict: 'A',
            require: '^form',
            compile: function (elem, attrs) {
                if (!elem.hasClass('form-group')) {
                    throw 'show-errors element does not have the \'form-group\' class';
                }
                return linkFn;
            }
        };
    }
);

module.provider('showErrorsConfig', function () {
    var _showSuccess;
    _showSuccess = false;
    this.showSuccess = function (showSuccess) {
        return _showSuccess = showSuccess;
    };
    this.$get = function () {
        return { showSuccess: _showSuccess };
    };
});

module.controller('NewUserController', function($scope) {
    $scope.cardName = "";
    $scope.cardNumber = "";
    $scope.cvc = "";

    $scope.payEmail = "";
    $scope.payPassword = "";

    $scope.cond = (($scope.cardName != "" && $scope.cardNumber != "" && $scope.cvc != "") || ($scope.payEmail != "" && $scope.payPassword != ""));

    $scope.user= {};

    $scope.save = function() {
        //$scope.$broadcast('show-errors-check-validity');
        console.log("clicked");
        console.log($scope.userForm.cardName.$valid);
        console.log($scope.userForm.cardNumber.$valid);
        console.log($scope.userForm.cvc.$valid);
        console.log($scope.userForm.payEmail.$valid);
        console.log($scope.userForm.payPassword.$valid);

        if (($scope.userForm.cardName.$valid && $scope.userForm.cardNumber.$valid && $scope.userForm.cvc.$valid)
            || ($scope.userForm.payEmail.$valid && $scope.userForm.payPassword.$valid)) {
            alert('User saved');
            $scope.reset();
        }
    };

    $scope.reset = function() {
        $scope.userForm = { name: '', email: '', donation: '', message: ''};
    }
});


                