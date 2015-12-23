define(function(require, exports) {

var Tag = Backbone.View.extend({
  initialize:function(){
    var oData = {
      aTag:aTags
    }
  	$('.tags').html(this.template(oData));
  },
  template:_.template($('#J_tag').html()),
  el:$('.tags'),
  events:{
    'click .tags-a':'showArticles'
  },
  showArticles:function(e){
    var target = e.target || e.srcElement;
    var url = $(target).attr('href');
    location.hash=url;

    //
    var temp = require('./tag_articles.js');
    var TagArticles = temp.TagArticles;
    var t = new TagArticles;

    return false;
  }
});

exports.Tag = Tag;

});