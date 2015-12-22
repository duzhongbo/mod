define(function(require, exports) {


var Router = Backbone.Router.extend({
	routes:{
		'':'index',// 只有域名的情况,首页
		'list':'list',// 列表页
		'tags':'tags',// 标签页
		'article/:year/:month/:date/:title':'showDetail',// #article/2015/11/05/xxoo.html文章页
		'search=:keyword':'search'
	},
	showDetail:function () {
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
	index:function(){
		$('.page').hide();
		$('.index').show();
	},
	list:function(){
		$('.page').hide();
		$('.list').show();
	},
	tags:function(){
		$('.page').hide();
		$('.tags').show();
	}

});

exports.Router = Router;

});