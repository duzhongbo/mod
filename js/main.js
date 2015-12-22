define(function(require, exports) {
	// 路由
	var temp = require('./router.js');
	var Router = temp.Router;
	var r = new Router;
	Backbone.history.start();
	// 首页文章列表渲染
	var temp = require("./view/article_list");
	ArticleList = temp.ArticleList;
	var a = new ArticleList;


});