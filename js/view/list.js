define(function(require, exports) {

var List = Backbone.View.extend({
  initialize:function(){
    var oData = {
      aArticle:aArticle
    }
  	$('.list').html(this.template(oData));
  },
  template:_.template($('#J_list').html()),
  el:$('.list'),
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

exports.List = List;

});