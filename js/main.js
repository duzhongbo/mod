define(function(require, exports) {
	var temp;
	// 导航
	temp = require('./view/nav.js');
	var n = new temp.Nav;


	// 搜索
	temp = require('./view/search.js');
	var s = new temp.Search;

	// 首页图文切换
	temp = require('./view/welcome.js');
	var w = new temp.Welcome;

	// 标签页文章列表模型
	temp = require('./model/tag_articles_model.js');
	var modelTagArticles = temp.modelTagArticles;
	window.m = new modelTagArticles;

	// 标签页标签部分
	var temp = require('./view/tag.js');
	var Tag = temp.Tag;
	var t = new Tag;


	// 标签页文章列表视图
	temp = require('./view/tag_articles.js');
	var TagArticles = temp.TagArticles;
	window.t = new TagArticles({model:m});

	// 路由
	temp = require('./router.js');
	var r = new temp.Router;
	Backbone.history.start();

});