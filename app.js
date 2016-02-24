angular.module('app', [])
    .controller('appController', function ($scope) {
        $scope.aged = true;

        $scope.getClass = function (_index) {
            if(_index%2) {
                return 'event-row-even';
            }
            if(_index%3) {
                return 'event-row-bla';
            }
        };

        $scope.events = [
            {
                id: $scope.index--,
                date: new Date("April 06, 2016"),
                city: 'Zermatt (CH)',
                festival: 'Zermatt Unplugged',
                festivalUrl: false,
                url: 'http://www.zermatt-unplugged.ch/programm/konzerte-2016/johannes-oerding',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("April 29, 2016"),
                city: 'Wendelstein',
                festival: 'Jazz & Blues Open',
                festivalUrl: false,
                url: 'http://kj.de/tickets.html?artist=3261&event=16490',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("May 04, 2016"),
                city: 'Wissen',
                festival: 'kulturWERKwissen (WERKtage-Biennale 2016)',
                festivalUrl: false,
                url: 'https://shop.reservix.de/off/login_check.php?id=e14d826c6d0d33804bfb8e00dc6abc7f4e9fdb9aac4d92afa702dee9535d8feef2bea2dd9b7f2afcaa7f64ea36a36cc7&vID=5917&eventGrpID=179064&eventID=753451',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("May 07, 2016"),
                city: 'Freyburg',
                festival: 'RotkÃ¤ppchen Sektkellerei',
                festivalUrl: false,
                url: 'http://www.eventim.de/johannes-oerding-freyburgunstrut-Tickets.html?affiliate=GMD&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=1206931%246548419&jumpIn=yTix&kuid=226335&from=erdetaila',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("May 20, 2016"),
                city: 'Goslar',
                festival: 'Weltkulturerbe Rammelsberg',
                festivalUrl: false,
                url: false,
                support: false,
                sold: true,
            }
            , {
                id: $scope.index--,
                date: new Date("May 27, 2016"),
                city: 'Ladenburg',
                festival: 'Ladenburger Musikfestival',
                festivalUrl: false,
                url: 'http://kj.de/tickets.html?artist=3261&event=16487',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("May 31, 2016"),
                city: 'Bad Hersfeld',
                festival: 'Bad Hersfelder Festspiele - Stiftsruine',
                festivalUrl: false,
                url: false,
                support: false,
                sold: true,
            }
            , {
                id: $scope.index--,
                date: new Date("June 04, 2016"),
                city: 'Uelzen',
                festival: 'Almased Arena (Uelzen Open R 2016)',
                festivalUrl: false,
                url: 'http://kj.de/tickets.html?artist=3261&event=16283',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("June 04, 2016"),
                city: 'Bassum',
                festival: 'KonzertgelÃ¤nde Freudenburg (Bassum-Open-Air 2016)',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-75.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("June 11, 2016"),
                city: 'Wolfhagen',
                festival: 'Kulturzelt',
                festivalUrl: false,
                url: 'https://www.adticket.de/Johannes-Oerding.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("June 24, 2016"),
                city: 'Straelen',
                festival: 'Auf dem Marktplatz',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-81.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("July 16, 2016"),
                city: 'Regensburg',
                festival: 'Piazza im Gewerbepark',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-86.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("July 22, 2016"),
                city: 'Husum',
                festival: 'Schlosshof',
                festivalUrl: false,
                url: false,
                support: false,
                sold: true,
            }
            , {
                id: $scope.index--,
                date: new Date("July 23, 2016"),
                city: 'Halle (Saale)',
                festival: 'FreilichtbÃ¼hne Peissnitzinsel (Picknick Open Air 2016)',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/index.php',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("July 27, 2016"),
                city: 'Norderney',
                festival: 'Summertime in Norderney',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-84.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("July 29, 2016"),
                city: 'Cloppenburg',
                festival: 'Stadtpark Open Air',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-79.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("July 31, 2016"),
                city: 'Balingen',
                festival: 'Marktplatz',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-85.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("August 04, 2016"),
                city: 'Sylt',
                festival: 'Meerkabarett',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-88.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("August 05, 2016"),
                city: 'Dresden',
                festival: 'Konzertplatz WeiÃŸer Hirsch',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-82.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("August 06, 2016"),
                city: 'Rostock',
                festival: 'IGA Park',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-78.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("August 10, 2016"),
                city: 'Thale',
                festival: 'Harzer Bergtheater',
                festivalUrl: false,
                url: false,
                support: false,
                sold: true,
            }
            , {
                id: $scope.index--,
                date: new Date("August 11, 2016"),
                city: 'Thale',
                festival: 'Harzer Bergtheater',
                festivalUrl: false,
                url: false,
                support: false,
                sold: true,
            }
            , {
                id: $scope.index--,
                date: new Date("August 18, 2016"),
                city: 'Hanau',
                festival: 'Amphitheater',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-87.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("August 19, 2016"),
                city: 'Gera',
                festival: 'VEOLIA BÃ¼hne',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-83.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("August 21, 2016"),
                city: 'Neubrandenburg',
                festival: 'Open Air FlÃ¤che Jahnsportforum',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-80.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("August 24, 2016"),
                city: 'Mönchengladbach',
                festival: 'Sommermusik Schloss Rheydt',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-89.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("August 26, 2016"),
                city: 'Hamburg',
                festival: 'Stadtpark (Zusatzshow)',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-91.html',
                support: false,
                sold: false,
            }
            , {
                id: $scope.index--,
                date: new Date("August 27, 2016"),
                city: 'Hamburg',
                festival: 'Stadtpark',
                festivalUrl: false,
                url: false,
                support: false,
                sold: true,
            }
            , {
                id: $scope.index--,
                date: new Date("August 28, 2016"),
                city: 'Hannover',
                festival: 'ParkbÃ¼hne',
                festivalUrl: false,
                url: 'http://johannesoerding.wlec.ag/johannes-oerding-tickets-73.html',
                support: false,
                sold: false,
            }

        ];
    });