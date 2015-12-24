define(function(require, exports) {
	var temp;

	// 欢迎页图文切换
	new require('./view/welcome.js').Welcome;
	// 导航
	temp = require('./view/nav.js');
	new temp.VNav;


	// 搜索
	temp = require('./view/search.js');
	new temp.VSearch;

	// 搜街结果模型
	temp = require('./model/search_result.js');
	window.ms = new temp.modelSearchResult;

	// 搜索结果页
	temp = require('./view/search_result.js');
	new temp.SearchResult({model:ms});

	// 首页视图
	temp = require('./view/index.js');
	var Index = temp.Index;
	new Index;

	// 列表页视图
	temp = require('./view/list.js');
	var List = temp.List;
	new List;

	// 标签页视图
	temp = require('./view/tag.js');
	var Tag = temp.Tag;
	new Tag;


	// 标签页文章列表模型
	temp = require('./model/tag_articles.js');
	var modelTagArticles = temp.modelTagArticles;
	window.m = new modelTagArticles;

	// 标签页文章列表视图
	temp = require('./view/tag_articles.js');
	var TagArticles = temp.TagArticles;
	new TagArticles({model:m});

	// 标签页标签部分
	temp = require('./view/tag.js');
	var Tag = temp.Tag;
	new Tag;

	// 路由
	temp = require('./router.js');
	new temp.Router;
	Backbone.history.start();

});