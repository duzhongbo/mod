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
		$('.nav,.footer').show();
		$('.nav-a').removeClass('nav-cur-a');
		var url = (location.hash).split('#article')[1];
		this.filterData(url);
	},
	filterData:function(sUrl){
		for(var i=0,len=aArticle.length;i<len;i++){
			var url = aArticle[i].url
			if(sUrl==url){
				// $('.page').hide();
				$('.article-title').html(aArticle[i].title);
				var temp = this.html_decode(aArticle[i].content);
				$('.article-content').html(temp);
				// $('.article').show();
				this.movePage($('.article'));
				console.log(aArticle[i]);
			}
		}
	},
	movePage:function(oPage){
		$('.page').show();
		$('.page').addClass('out');
		oPage.addClass('in');
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
		$('.page').hide();
		$('.index,.nav,.footer').show();
		$('.nav-a').removeClass('nav-cur-a');
		var obj = $('.nav-a')[0];
		$(obj).addClass('nav-cur-a');
	},
	list:function(){
		// $('.page').hide();
		$('.list,.nav,.footer').show();

		$('.page').addClass('out');
		$('.list').addClass('in');

		$('.nav-a').removeClass('nav-cur-a');
		var obj = $('.nav-a')[1];
		$(obj).addClass('nav-cur-a');
	},
	tags:function(){
		$('.page').hide();
		$('.tags,.nav,.footer').show();
		$('.nav-a').removeClass('nav-cur-a');
		var obj = $('.nav-a')[2];
		$(obj).addClass('nav-cur-a');
	},
	tag:function(tag){

		$('.nav-a').removeClass('nav-cur-a');
		var obj = $('.nav-a')[2];
		$(obj).addClass('nav-cur-a');

		m.set('aTagAticle',oArticle[tag]);
		// 标签高亮
		$('.tags-a').removeClass('tags-cur-a');
		$('.tags-a').each(function(){
			if($(this).html()==tag){
				$(this).addClass('tags-cur-a');
			}
		});

	    $('.page').hide();
	    $('.tags,.nav,.footer').show();
	},
	search:function(keyword){
		var aRes;
		aRes=this.search2(keyword);
		if(!aRes.length){
			$('.page').hide();
			$('.search-result,.nav').show();
			$('.search-result-body').html('<p class="tac fw">找到不到相关文章!</p>');
			return;
		}

		ms.set('aSearchResult',aRes);

		$('.page').hide();
		$('.search-result,.nav,.footer').show();


	},
	search2:function(keyword){
		var data=[];
		for(var i=0,len=aArticle.length;i<len;i++){
			if(aArticle[i]['title'].indexOf(keyword)!=-1
				||aArticle[i]['content'].indexOf(keyword)!=-1){
				data.push(aArticle[i]);
			}
		}
		return data;

	}

});

exports.Router = Router;

});