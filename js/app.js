var app = angular.module('movie', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/:movie', {
    templateUrl: 'partials/search.html',
    controller: 'homeController',
  })
  .when('/:id/show', {
    templateUrl: 'partials/movie.html',
    controller: 'movieController',
  })
  $locationProvider.html5Mode(true);
})
