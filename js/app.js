angular.module('app', []);

angular.module('app').controller('appController', function ($scope) {
        $scope.events = [
            {
                date: new Date("April 06, 2016"),
                city: 'Zermatt (CH)',
                festival: 'Zermatt Unplugged',
            }
            , {
                date: new Date("April 29, 2016"),
                city: 'Wendelstein',
                festival: 'Jazz & Blues Open',
            }
            , {
                date: new Date("May 04, 2016"),
                city: 'Wissen',
                festival: 'kulturWERKwissen',
            }
            , {
                date: new Date("May 07, 2016"),
                city: 'Freyburg',
                festival: 'Rotkäppchen Sektkellerei',
            }
        ];
    });