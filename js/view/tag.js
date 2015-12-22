define(function(require, exports) {

var Tag = Backbone.View.extend({
  initialize:function(){
    var oData = {
      aTag:aTags
    }
  	$('.tags-ul').html(this.template(oData));
  },
  template:_.template($('#J_tag').html()),
  el:$('.tags-ul'),
  events:{
    'click .tags-a':'showArticles'
  },
  showArticles:function(e){
    var target = e.target || e.srcElement;
    var url = $(target).attr('href');
    location.hash=url;
    return false;
  }
});

exports.Tag = Tag;

});