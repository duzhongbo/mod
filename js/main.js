define(function(require, exports) {
	var temp;
	// 导航
	temp = require('./view/nav.js');
	var n = new temp.Nav;


	// 搜索
	temp = require('./view/search.js');
	var s = new temp.Search;

	// 搜街结果模型
	temp = require('./model/search_result.js');
	window.ms = new temp.modelSearchResult;

	// 搜索结果页
	temp = require('./view/search_result.js');
	var s = new temp.SearchResult({model:ms});


	// 欢迎页图文切换
	temp = require('./view/welcome.js');
	var w = new temp.Welcome;

	// 首页视图
	temp = require('./view/index.js');
	var Index = temp.Index;
	var i = new Index;

	// 列表页视图
	temp = require('./view/list.js');
	var List = temp.List;
	var l = new List;

	// 标签页视图
	temp = require('./view/tag.js');
	var Tag = temp.Tag;
	var t = new Tag;


	// 标签页文章列表模型
	temp = require('./model/tag_articles.js');
	var modelTagArticles = temp.modelTagArticles;
	window.m = new modelTagArticles;

	// 标签页文章列表视图
	temp = require('./view/tag_articles.js');
	var TagArticles = temp.TagArticles;
	var t = new TagArticles({model:m});

	// 标签页标签部分
	temp = require('./view/tag.js');
	var Tag = temp.Tag;
	var t = new Tag;

	// 路由
	temp = require('./router.js');
	var r = new temp.Router;
	Backbone.history.start();

});