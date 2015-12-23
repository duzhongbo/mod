define(function(require, exports) {


var Router = Backbone.Router.extend({
	routes:{
		'':'welcome',// 欢迎页
		'index':'index',// 只有域名的情况,首页
		'list':'list',// 列表页
		'tags':'tags',// 标签页
		'tag=:tag':'tag',// 具体某个标签类别下，#tag=xxx
		'article/:year/:month/:date/:title':'showDetail',// #article/2015/11/05/xxoo.html文章页
		'search=:keyword':'search'
	},
	showDetail:function () {
		$('.nav').show();
		var url = (location.hash).split('#article')[1];
		this.filterData(url);
	},
	filterData:function(sUrl){
		for(var i=0,len=aArticle.length;i<len;i++){
			var url = aArticle[i].url
			if(sUrl==url){
				$('.page').hide();
				$('.article-title').html(aArticle[i].title);
				var temp = this.html_decode(aArticle[i].content);
				$('.article-content').html(temp);
				$('.article').show();
				console.log(aArticle[i]);
			}
		}
	},
	html_decode:function (str) {// 将已经转义的html标签重新转回
		var s = "";   
		if (str.length == 0) return "";   
		s = str.replace(/&gt;/g, ">");   
		s = s.replace(/&lt;/g, "<");   
		s = s.replace(/&nbsp;/g, " ");   
		s = s.replace(/&quot;/g, "\"");   
		s = s.replace(/<br>/g, "\n");
		s = s.replace(/class/g,' class');
		s = s.replace(/src/g,' src');
		return s;   		
	},
	welcome:function(){
		$('.page,.nav,.footer').hide();
		$('.welcome').show();
		$('.nav-a').removeClass('nav-cur-a');
		var obj = $('.nav-a')[0];
		$(obj).addClass('nav-cur-a');
		
	},
	index:function(){
		// 首页
		var temp = require('./view/index.js');
		var Index = temp.Index;
		var i = new Index;

		
		$('.page').hide();
		$('.index,.nav,.footer').show();
		$('.nav-a').removeClass('nav-cur-a');
		var obj = $('.nav-a')[0];
		$(obj).addClass('nav-cur-a');
	},
	list:function(){
		$('.page').hide();
		$('.list,.nav,.footer').show();
		$('.nav-a').removeClass('nav-cur-a');
		var obj = $('.nav-a')[1];
		$(obj).addClass('nav-cur-a');
		//
		var temp = require('./view/list.js');
		var List = temp.List;
		var l = new List;
	},
	tags:function(){
		$('.page').hide();
		$('.tags,.nav,.footer').show();
		$('.nav-a').removeClass('nav-cur-a');
		var obj = $('.nav-a')[2];
		$(obj).addClass('nav-cur-a');
		//
		var temp = require('./view/tag.js');
		var Tag = temp.Tag;
		var t = new Tag;
	},
	tag:function(tag){
		console.log(tag,oArticle[tag]);
		var temp = require('./view/tag.js');
		var Tag = temp.Tag;
		var t = new Tag;

	    var temp = require('./view/tag_articles.js');
	    var TagArticles = temp.TagArticles;
	    var t = new TagArticles;
	    $('.page').hide();
	    $('.tags,.nav,.footer').show();
	}
});

exports.Router = Router;

});