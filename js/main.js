define(function(require, exports) {

	// 导航
	var temp = require('./view/nav.js');
	var Nav = temp.Nav;
	var n = new Nav;

	// 路由
	var temp = require('./router.js');
	var Router = temp.Router;
	var r = new Router;
	Backbone.history.start();

	// 首页
	var temp = require('./view/index.js');
	var Index = temp.Index;
	var i = new Index;


});