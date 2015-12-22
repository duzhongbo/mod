define(function(require, exports) {

var ArticleList = Backbone.View.extend({
  initialize:function(){
    var oData = {
      aArticle:aArticle.slice(0,3)
    }
  	$('.index .article-list-ul').html(this.template(oData));
  },
  template:_.template($('#J_index_article_list').html()),
  el:$('.index .article-list-ul'),
  events:{
    'click .article-list-a':'showArticles'
  },
  showArticles:function(e){
    var target = e.target || e.srcElement;
    var url = $(target).attr('href');
    location.hash='article'+url;
    return false;
  }
});

exports.ArticleList = ArticleList;

});