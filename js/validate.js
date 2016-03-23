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

    $scope.user= {};

    $scope.save = function(formFlag) {
        if(formFlag == 0) {

            if (($scope.donateForm.cardName.$valid && $scope.donateForm.cardNumber.$valid && $scope.donateForm.cvc.$valid)
                || ($scope.donateForm.payEmail.$valid && $scope.donateForm.payPassword.$valid)) {
                alert('Thank you for your donation!');
                $scope.reset(0);
            }
        } else {
            if ($scope.volForm.$valid) {
                alert('Thank you for submitting your volunteer application !');
                $scope.reset(formFlag);
            }
        }
    };

    $scope.reset = function(formFlag) {
        if(formFlag == 0) {
            $scope.$broadcast('show-errors-reset');
            $scope.user = { name: '', email: '', donation: '', message: '',
                            cardName: '', cardNumber: '', cvc: '',
                            payEmail: '', payPassword: ''};

        } else{
            $scope.$broadcast('show-errors-reset');
            $scope.user = { name: '', age: '', occupation: '', phone: '',
                            email: '', address1: '', address2: '',
                            address3: '', town: '', county: '', postCode: ''};
        }
    }
});