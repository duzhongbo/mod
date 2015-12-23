define(function(require, exports) {


var Router = Backbone.Router.extend({
	routes:{
		'':'welcome',// 欢迎页
		'index':'index',// 只有域名的情况,首页
		'list':'list',// 列表页
		'tags':'tags',// 标签页
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
				$('.article-content').html(aArticle[i].content);
				$('.article').show();
				console.log(aArticle[i]);
			}
		}
	},
	welcome:function(){
		$('.page,.nav,.footer').hide();
		$('.welcome').show();
		$('.nav-a').removeClass('nav-cur-a');
		var obj = $('.nav-a')[0];
		$(obj).addClass('nav-cur-a');
		
	},
	index:function(){
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
		$('.tags').show();
		$('.nav-a').removeClass('nav-cur-a');
		var obj = $('.nav-a')[2];
		$(obj).addClass('nav-cur-a');
		//
		var temp = require('./view/tag.js');
		var Tag = temp.Tag;
		var t = new Tag;
	}

});

exports.Router = Router;

});