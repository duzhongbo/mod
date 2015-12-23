define(function(require, exports) {

var Index = Backbone.View.extend({
  initialize:function(){
    var oData = {
      aArticle:aArticle
    }
  	$('.index .common-inner').html(this.template(oData));
  },
  template:_.template($('#J_index').html()),
  el:$('.index'),
  events:{
    'click .article-list-a':'showArticles'
  },
  showArticles:function(e){
    var target = e.target || e.srcElement;
    var url = $(target).attr('href');
    location.hash=url;
    return false;
  }
});

exports.Index = Index;

});