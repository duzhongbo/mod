define(function(require, exports) {

var TagArticles = Backbone.View.extend({
  initialize:function(){
    var hash = location.hash;
    var aData = oArticle[hash.split('#tag=')[1]];
    var oData = {
      aTagAticle:aData
    }
  	$('.tags-articles').html(this.template(oData));
  },
  template:_.template($('#J_tag_articles').html()),
  el:$('.tags-articles'),
  events:{
    'click .tags-articles-a':'showArticles'
  },
  showArticles:function(e){
    var target = e.target || e.srcElement;
    var url = $(target).attr('href');
    location.hash=url;
    return false;
  }
});

exports.TagArticles = TagArticles;

});