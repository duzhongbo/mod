define(function(require, exports) {
	var temp;
	// 导航
	temp = require('./view/nav.js');
	var n = new temp.Nav;

	// 路由
	temp = require('./router.js');
	var r = new temp.Router;
	Backbone.history.start();

	// 搜索
	temp = require('./view/search.js');
	var s = new temp.Search;

	// 首页图文切换
	temp = require('./view/welcome.js');
	var w = new temp.Welcome;


});