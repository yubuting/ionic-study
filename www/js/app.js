// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
//angular.module('starter', ['ionic', 'starter.controllers'])
angular.module('todo',['ionic'])
    .controller('TodoCtrl',function($scope){
      $scope.tasks = [
        {title:'菜鸟教程'},
        {title:'www.runoob.com'},
        {title:'菜鸟教程'},
        {title:'www.runoob.com'}
      ];
      $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
        $scope.taskModal = modal;
      }, {
        scope: $scope,
        animation: 'slide-in-up'
      });

      // 表单提交时调用
      $scope.createTask = function(task) {
        $scope.tasks.push({
          title: task.title
        });
        $scope.taskModal.hide();
        task.title = "";
      };

      // 打开新增的模型
      $scope.newTask = function() {
        $scope.taskModal.show();
      };

      // 关闭新增的模型
      $scope.closeNewTask = function() {
        $scope.taskModal.hide();
      };
    });


  // if none of the above states are matched, use this as the fallback
 //  $urlRouterProvider.otherwise('/app/playlists');

