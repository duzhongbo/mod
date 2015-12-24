define(function(require, exports) {

var TagArticles = Backbone.View.extend({
  initialize:function(){
  	this.show();
    this.listenTo(this.model,'change',this.show);
  },
  show:function(){
    $('.tags-articles').html(this.template(this.model.toJSON()));
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