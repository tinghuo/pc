var app=angular.module("app",["ui.router"]);//ui.router用到了，就传进去
			 app.config(function($stateProvider,$urlRouterProvider){
			 	//没有找到输入的网页，跳转回two
			 	 $urlRouterProvider.otherwise('/home')
			 	  //点击那个 ，跳转进去那个页面
			 	  $stateProvider
			 	  .state({
			 	  	 name:'home',
			 	  	 url:"/home",
			 	  	 templateUrl:"./1.html"
			 	  })
//			 	   .state({
//			 	  	 name:'two',
//			 	  	 url:"/two",
//			 	  	 templateUrl:"./views/list.html"
//			 	  })
//			 	   .state({
//			 	  	 name:'three',
//			 	  	 url:"/three",
//			 	  	 templateUrl:"./views/three.html"
//			 	  })
				app.directive("header",function(){
				return {
					restrict:"E",
					templateUrl:"./header.html"
				}
			})
			 })