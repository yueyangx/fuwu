/**
 * Created by MAC on 2017/10/19.
 */
var app=angular.module("myApp",['ui.router','ionic']);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("fuwu",{
            url:'/fuwu',
            templateUrl:"App/View/fuwu.html"
        })
        .state("fu",{
            url:'/fu',
            templateUrl:"App/View/fu.html"
        })
    $urlRouterProvider.otherwise("/fuwu")

})