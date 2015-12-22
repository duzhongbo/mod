define(function(require, exports) {
	// 路由
	var temp = require('./router.js');
	var Router = temp.Router;
	var r = new Router;
	// 首页文章列表渲染
	var temp = require("./view/ArticleList");
	ArticleList = temp.ArticleList;
	var a = new ArticleList;


});