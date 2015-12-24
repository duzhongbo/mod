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
});

exports.TagArticles = TagArticles;

});