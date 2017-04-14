﻿(function () {
    "use strict";

    // Rutas
    angular.module('ngConstants', [])

        .factory('ngServicesCtrl', [function() {
            var url = URLSERVICE;
        
            return {
                    Login: {
                        token: url + '/token'
                    },
                    User: {
                        GetUserContext: url + '/user/GetUserContext'
                    },
                    Home: {
                    },
                    ReportController: {
                        Add: url + '/Report/Add',
                        Update: url + '/Report/Update'
                    }
                }

        }])

     .constant('ngRoutesCtrl', {

        ReportListViewCtrl: {
            url: '/Report/List',
            templateUrl: 'App/Module/Report/View/List.html',
            controller: 'ReportListViewCtrl'
        },

    	ReportViewCtrl: {
            url: '/Report',
            templateUrl: 'App/Module/Report/View/Index.html',
            controller: 'ReportViewCtrl'
        },

        HomeViewCtrl: {
            url: '/Home',
            templateUrl: 'App/Module/Home/View/Index.html',
            controller: 'HomeViewCtrl'
        },

        LoginViewCtrl: {
            url: '/',
            templateUrl: 'App/Module/Login/View/Index.html',
            controller: 'LoginViewCtrl',
            data: {
            	guestAccess : true
            }
        },
    })

    .constant('ngEnumerados', {

        Extensiones: {
            //jpg:
        },
    })

    .constant('ngCommon', {

        UrlImageProfile: 'Users/Profile/',
        UrlImageNoIcon: 'Content/images/no-image-icon.png',
        Value500 : 500

    })

    ;

})();