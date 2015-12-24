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
  	'click .tags-a':'showCur'
  },
  showCur:function(e){
  	$('.tags-a').removeClass('tags-cur-a');
  	var target = e.target || e.srcElement;
  	console.log(target,12212121,$(target));
  	$(target).addClass('tags-cur-a');
  }
});

exports.Tag = Tag;

});